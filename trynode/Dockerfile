FROM node:carbon

# Create the working dir
WORKDIR /usr/src/app

# Installl the dependencies
COPY package.json .

RUN npm install

# Bundle the app
COPY . .

# Publish the port
EXPOSE 7070
CMD [ "npm", "start"]