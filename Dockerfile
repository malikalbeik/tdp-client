# base image
FROM node:12.7.0

# set working directory
WORKDIR /tdpClient

# add `/app/node_modules/.bin` to $PATH
ENV PATH /tdpClient/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /tdpClient/package.json
RUN npm install
RUN npm install react-scripts -g

# start app
CMD ["npm", "start"]
