FROM node:14 as build
WORKDIR /app
COPY package*.json ./
COPY lerna.json ./
COPY ./packages/ff/package*.json ./packages/ff/
COPY ./packages/ffProxy/package*json ./packages/ffProxy/
RUN npm install
COPY . .
RUN npm run bootstrap

FROM cypress/base as test
COPY --from=build . .
RUN npm install
RUN npm run ui_tests

FROM build as prod
ENV NODE_ENV=production
RUN npm run build_ff_ui
CMD ["npm", "run", "start_prod_server"]





