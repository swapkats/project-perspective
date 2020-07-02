# Dockerfile (tag: v3)
FROM node:12.8.2
WORKDIR /tmp
COPY package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ && npm install
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/
CMD ["npm", "start"]
EXPOSE 8080 
