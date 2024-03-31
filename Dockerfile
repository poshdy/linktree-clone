FROM node:20-alpine as developement

WORKDIR /app

COPY package*.json .

RUN npm install

COPY .  .

CMD [ "npm","run","dev" ]


FROM node:20-alpine as production

ARG NODE_ENV="production"

ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json .

RUN npm install --omit=dev




CMD [ "npm","run","dev" ]

