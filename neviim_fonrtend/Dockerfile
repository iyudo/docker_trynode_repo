FROM node:latest

ENV HOME=/usr/src/app
# Create the working dir
RUN mkdir $HOME
RUN chown node:node $HOME
RUN chown -R node:node /usr/local/

WORKDIR $HOME

USER node

# Copy source code
ADD . $HOME

# Installl the dependencies
RUN npm install -g @angular/cli && npm install

EXPOSE 4200

CMD [ "ng", "serve"]