FROM node:latest

RUN chown -R node:node /usr/local/

USER node

# Install dependencies
RUN npm install -g @angular/cli
RUN ng new my-app

WORKDIR /my-app

CMD [ "ng", "serve"]