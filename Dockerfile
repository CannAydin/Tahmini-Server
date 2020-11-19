FROM node:latest

# Create app directory
WORKDIR /var/www/tbc

# Bundle app source
COPY . .

# Install app dependencies
RUN npm install

EXPOSE 8080
CMD [ "node", "app.js" ]