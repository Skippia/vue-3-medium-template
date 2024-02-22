FROM node:18-alpine as development

WORKDIR /app

EXPOSE 3000

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build
