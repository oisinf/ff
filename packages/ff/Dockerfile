FROM node:alpine as builder
WORKDIR /app
COPY package.json . 
RUN npm install
COPY . .
RUN npm run build

#Use nginx for production build server as dev server not suitable

FROM nginx:alpine 
COPY --from=builder /app/build /usr/share/nginx/html