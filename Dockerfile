FROM node:14 as builder

WORKDIR /app
ENV SKIP_PREFLIGHT_CHECK=true
ENV PERCY_TOKEN=dfb65bd3ae8c0a49cefd4d1d853e837ea8d93fa3fb53e8001239ffd31960b102
RUN apt-get update -y && apt-get install xvfb libnss3 libatk1.0-0 libatk-bridge2.0-0 libxcomposite1 libcups2 libxrandr2 libpangocairo-1.0-0 libgtk-3-0 -y
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
