FROM node:latest

ENV HOME=/usr/src/app
# Change working directory
RUN mkdir $HOME
RUN chown node:node $HOME
WORKDIR $HOME

USER node

# Install dependencies
RUN npm install -g angular-cli