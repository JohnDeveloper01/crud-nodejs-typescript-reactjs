FROM node:16.17.0
WORKDIR /app

COPY *.json /app/

RUN npm install

COPY . /app/

EXPOSE 3002

CMD ["npm","run","dev"]