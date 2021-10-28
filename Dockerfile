FROM node:16-alpine3.11 as api-web

WORKDIR /var/www

RUN apk update
RUN apk add curl

# copy project
COPY tsconfig.json package-lock.json package.json nodemon.json ./
COPY .env.local ./.env
COPY src/ ./src


# install project
RUN npm install

CMD ["npx", "nodemon"]
