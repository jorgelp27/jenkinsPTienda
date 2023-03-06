FROM node:16 as install
LABEL stage=install

ARG USUARIO
ARG PASSWD
ARG PROYECTO
ARG DB_HOST
ARG DB_NAME
ARG DB_PORT
ARG DB_USER
ARG DB_PASS
ARG URL_GIT
ARG W_PORT

ENV USUARIO=${USUARIO}
ENV PASSWD=${PASSWD}
ENV PROYECTO=${PROYECTO}
ENV DB_HOST=${DB_HOST}
ENV DB_NAME=${DB_NAME}
ENV DB_PORT=${DB_PORT}
ENV DB_USER=${DB_USER}
ENV DB_PASS=${DB_PASS}
ENV URL_GIT=${URL_GIT}
ENV W_PORT=${w_PORT}

WORKDIR /app
COPY ./api_nest/package.json .
COPY ./api_nest/yarn.lock .
RUN yarn install --force

COPY ./api_nest .

RUN yarn build
RUN yarn config set network-timeout 60000
RUN yarn install --production=true

FROM nginx:1.19.0-alpine as deploy

COPY --from=install /app/dist/main.js /usr/share/nginx/html/index.js
COPY --from=install /app/dist/node_modules /usr/share/nginx/html/node_modules
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]