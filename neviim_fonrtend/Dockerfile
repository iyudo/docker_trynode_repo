FROM node:carbon

# Copy source code
COPY . /frontapp

# Create the working dir
WORKDIR /frontapp

# Installl the dependencies
RUN npm install

# Publish the port
# EXPOSE 7070
CMD [ "ng", "serve"]