# develop stage
FROM node:14.8.0-alpine3.11 as develop-stage
WORKDIR /app
COPY package*.json ./
# RUN apk up#date
RUN apk add git
RUN yarn cache clean
RUN yarn install
COPY . .
EXPOSE 8081
CMD ["yarn", "serve"]
# build stage
FROM develop-stage as build-stage
RUN yarn build
# production stage
FROM nginx:1.15.7-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]