FROM node:10-alpine AS builder
WORKDIR /app

RUN ["apk", "add", "--no-cache", "--virtual", ".gyp", "python", "make", "g++", "git"]

COPY ./package*.json ./
RUN ["npm", "install"]


FROM node:10-alpine AS app
WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY . .

EXPOSE 3006/tcp
USER node

CMD ["npm", "run", "start"]
