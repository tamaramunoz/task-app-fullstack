FROM node:alpine3.12

ADD . /app

RUN ls /app

RUN cd /app

RUN npm install

ENTRYPOINT ["node", "/app/src/index.js"]
