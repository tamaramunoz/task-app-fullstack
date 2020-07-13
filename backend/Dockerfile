FROM node:alpine3.12

ADD ./backend /app

RUN ls /app

RUN cd/app/backend

RUN npm install

ENTRYPOINT ["node", "/app/src/index.js"]