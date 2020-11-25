FROM node:14 as builder

WORKDIR /app
ENV SKIP_PREFLIGHT_CHECK=true
COPY tsconfig.json ./
COPY package*.json ./
COPY lerna.json ./
COPY ./packages/ff ./packages/ff
COPY ./packages/ffProxy ./packages/ffProxy
RUN npm install && npm run bootstrap && npm run build_ff_ui

FROM builder as dev
CMD ["npm", "run", "start_fe_be"]

FROM builder as percy_snapshot
RUN apt-get update -y && apt-get install gconf-service libasound2 libatk1.0-0 libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget -y
COPY ./.storybook ./.storybook
CMD ["npm", "run", "percy_snapshot"]

FROM builder as prod
ENV NODE_ENV=production
CMD ["npm", "run", "start_prod_server"]
