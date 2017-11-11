FROM node:latest

# Change working directory
WORKDIR /app

# Install dependencies
RUN npm install -g node-gyp-install
RUN npm install -g @angular/cli