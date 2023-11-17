FROM node:18-alpine

WORKDIR /home/node/app

RUN rm -rf node_modules 

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]