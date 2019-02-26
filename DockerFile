FROM node:boron
WORKDIR /app
COPY . .
CMD NODE_URLS=http://*:$PORT npm start