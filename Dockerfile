FROM cypress/base
RUN npm install

FROM node:14 as prod

WORKDIR /app
COPY package*.json ./
COPY lerna.json ./
COPY ./packages/ff/package*.json ./packages/ff/
COPY ./packages/ffProxy/package*json ./packages/ffProxy/
RUN npm install
COPY . .
RUN npm run bootstrap

ENV NODE_ENV=production
RUN npm run build_ff_ui
CMD ["npm", "run", "start_prod_server"]





