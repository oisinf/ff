FROM node:14 as prod

WORKDIR /app
COPY package*.json ./
COPY lerna.json ./
COPY ./packages/ff/package*.json ./packages/ff/
COPY ./packages/ffProxy/package*json ./packages/ffProxy/
RUN npm install
COPY . .
RUN npm run bootstrap
#TODO remove these dependencies so prod image is smaller
RUN apt-get update -y && apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

ENV NODE_ENV=production
RUN npm run build_ff_ui
CMD ["npm", "run", "start_prod_server"]





