FROM node:alpine as builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . ./
CMD [ "npm","run","dev" ]

FROM nginx:alpine-slim

RUN rm /etc/nginx/conf.d/default.conf
COPY  nginx.conf /etc/nginx/conf.d/nginx.conf