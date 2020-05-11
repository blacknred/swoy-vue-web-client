# base image
FROM node:alpine

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . ./

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
ADD package.json /usr/src/app/package.json
RUN yarn install
RUN yarn global add @vue/cli@3.7.0

EXPOSE 3000

# start app
CMD ["yarn", "serve"]

# docker build . -t swoy-vue-web-client
# docker run -it -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -p 8081:8080 swoy-vue-web-client
