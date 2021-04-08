FROM node:15.8.0-alpine3.11

RUN npm install -g npm

WORKDIR /api

COPY package.json package-lock.json /api/

RUN npm install

COPY . .

CMD ["npm", "run", "start-dev"]
