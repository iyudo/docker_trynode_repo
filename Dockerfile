FROM node:latest

# Change working directory
WORKDIR /app

# Install dependencies
RUN npm install express-generator -g