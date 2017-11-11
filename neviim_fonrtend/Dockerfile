FROM node:6.11-alpine as node-angular-cli

# Create the working dir
WORKDIR /frontapp

# Copy source code
ADD . /frontapp

# Define environment variable
ENV USER root

#Linux setup
RUN apk update \
  && apk add --update alpine-sdk \
  && apk del alpine-sdk \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache clear \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd

# Installl the dependencies
RUN npm install -g @angular/cli && npm install

# Publish the port
EXPOSE 4200

CMD [ "ng", "serve"]