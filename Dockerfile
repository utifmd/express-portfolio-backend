FROM node:latest

RUN mkdir -p ./development/backend/expressjs/personal

WORKDIR ./development/backend/expressjs/personal

COPY ./package*.json ./

RUN npm install

CMD npm start

COPY . .

EXPOSE 5000