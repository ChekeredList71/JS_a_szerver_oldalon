FROM node:22-alpine
LABEL authors="asd"

RUN mkdir /app
WORKDIR /app

COPY middlewares middlewares
COPY public public
COPY routes routes
COPY views views
COPY index.js .
COPY package*.json .

RUN npm i

CMD ["node", "index.js"]