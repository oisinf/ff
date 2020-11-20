FROM node:14 as builder

WORKDIR /app
ENV SKIP_PREFLIGHT_CHECK=true
COPY tsconfig.json ./
COPY package*.json ./
COPY lerna.json ./
COPY ./packages/ff ./packages/ff
COPY ./packages/ffProxy ./packages/ffProxy
COPY ./.storybook ./.storybook
RUN npm install
RUN npm run bootstrap
RUN npm run build_ff_ui
RUN npm run percy_snapshot

FROM builder as dev
CMD ["npm", "run", "start_fe_be"]

FROM builder as prod
ENV NODE_ENV=production
COPY ./packages/ffProxy/ ./packages/ffProxy/
COPY --from=builder ./app/packages/ff/build ./packages/ff/build/
CMD ["npm", "run", "start_prod_server"]
