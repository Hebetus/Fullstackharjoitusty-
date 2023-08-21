FROM node:16

WORKDIR /usr/src/app

COPY . .

ENV CI=true
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true

RUN npm install

CMD ["npm", "start"]