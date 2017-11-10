FROM node:latest

# Create the working dir
WORKDIR /frontapp

# Copy source code
ADD . /frontapp

# Installl the dependencies
RUN npm install -g @angular/cli && npm install

# Publish the port
# EXPOSE 7070
CMD [ "ng", "serve"]