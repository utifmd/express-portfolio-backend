FROM node:latest

RUN mkdir -p ./development/backend/expressjs/portfolio

WORKDIR ./development/backend/expressjs/portfolio

COPY ./package*.json ./

RUN npm install

CMD npm start

COPY . .

EXPOSE 5000