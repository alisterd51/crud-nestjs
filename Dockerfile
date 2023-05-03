# Base image
FROM node:20-alpine AS build

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm ci

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --omit=dev

COPY --from=build /usr/src/app/dist ./dist

# Start the server using the production build
CMD [ "node", "dist/main.js" ]