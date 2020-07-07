# Dockerfile (tag: v3)
FROM node:12.18.2
WORKDIR /tmp
COPY package.json yarn.lock /tmp/
RUN yarn install
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/
CMD ["yarn", "bundle"]
COPY /public /var/html/public
EXPOSE 80 
