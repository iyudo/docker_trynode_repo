FROM node:latest

# Change working directory
WORKDIR /app

# Install dependencies
RUN npm install @angular/cli -g