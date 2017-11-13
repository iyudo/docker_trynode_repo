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
WORKDIR ./my-app
RUN ls
EXPOSE 4201
CMD [ "ng", "serve", "--host", "0.0.0.0", "--port", "4201"]