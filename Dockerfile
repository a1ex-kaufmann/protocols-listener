FROM node:16.20.1
 
WORKDIR /app
 
COPY package.json package.json
COPY yarn.lock yarn.lock
 
RUN npm install
 
COPY . .

# EXPOSE 5000
 
CMD [ "node", "server.js" ]