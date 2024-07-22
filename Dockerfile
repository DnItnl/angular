FROM node:20 AS development

WORKDIR /soundscore/angular/src/app

COPY package*.json ./

RUN npm install
RUN npm i -g @angular/cli

COPY . .

RUN npm run build

EXPOSE 4200

RUN npm start
