FROM node:latest

ENV HOME=/usr/src/app
# Change working directory
RUN mkdir $HOME
RUN chown node:node $HOME
RUN chown -R node:node /usr/local/
WORKDIR $HOME

USER node

# Install dependencies
RUN npm install -g @angular/cli
RUN ng new my-app && cd my-app
RUN ls