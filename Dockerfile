FROM node:10 

WORKDIR /app

COPY . .

EXPOSE 3000


CMD ["yarn", "start"]

