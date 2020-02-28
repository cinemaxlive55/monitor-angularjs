### STAGE 1: Build ###
FROM node:9.5-alpine as builder

#RUN npm config set strict-ssl false
#RUN npm config set proxy http://10.18.240.148:8080
#RUN npm config set https-proxy http://10.18.240.148:8080
#RUN npm config set http-proxy http://10.18.240.148:8080
#RUN npm config set registry http://registry.npmjs.org
RUN npm set progress=false && npm config set depth 0 && npm cache clean --force
RUN npm install -g @angular/cli
RUN mkdir /monitor-dashboard
WORKDIR /monitor-dashboard
COPY . .
RUN cd ./client && npm install && ng build --prod --build-optimizer

RUN cd ./server && npm install

EXPOSE 3000
WORKDIR /monitor-dashboard/server

CMD ["npm", "start"]