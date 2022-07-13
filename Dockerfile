#base image
FROM node:12.18.2 as build-stage

# set working directory
RUN mkdir /usr/app
#copy all files from current directory to docker
COPY . /usr/app

WORKDIR /usr/app

# install and cache app dependencies
RUN yarn

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH



#
FROM nginx:alpine

#
WORKDIR /usr/share/nginx/html


RUN rm -rf ./*

COPY --from=build-stage /usr/app .

ENTRYPOINT ["nginx", "-g", "daemon off;"] 
# start app
