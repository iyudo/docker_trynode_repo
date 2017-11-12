FROM node:latest

ENV HOME=/usr/src/app
# Change working directory
RUN mkdir $HOME
WORKDIR $HOME

# Install dependencies
RUN npm install -g angular-cli