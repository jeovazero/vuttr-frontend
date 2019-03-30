FROM node:dubnium-alpine as build

RUN mkdir -p /home/node/vuttr-client

WORKDIR /home/node/vuttr-client

ENV PATH /home/node/vuttr-client/node_modules/.bin:$PATH

ADD . /home/node/vuttr-client

RUN npm install -g -s --no-progress yarn && yarn

RUN yarn prod

FROM nginx:1.13.12-alpine

COPY --from=build /home/node/vuttr-client/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
