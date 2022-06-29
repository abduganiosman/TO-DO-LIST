#Linux x64
FROM node:current-alpine

#Create dir in container image for app code
RUN mkdir -p /usr/src/app

#Copy app code (.) to /usr/src/appo in container image
COPY . /usr/usr/app

#Set working dir context
WORKDIR /usr/src/app

#Install dependencies from packages.json
RUN npm install

#Command for container to execute
ENTRYPOINT ["node", "app.tsx"]