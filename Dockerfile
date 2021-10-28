FROM node:16-alpine3.11 as api

WORKDIR /var/www

RUN apk update
RUN apk add curl

# copy project
COPY tsconfig.json package-lock.json package.json ./
COPY .env.local ./.env
COPY src/ ./src


# install project
RUN npm install
RUN npm run build

CMD ["nodeom"]
