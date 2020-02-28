### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:9.5-alpine as builder

COPY package.json package-lock.json ./

#RUN npm config set strict-ssl false
#RUN npm config set proxy http://10.18.240.148:8080
#RUN npm config set https-proxy http://10.18.240.148:8080
#RUN npm config set http-proxy http://10.18.240.148:8080
#RUN npm config set registry http://registry.npmjs.org

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /monitor-dashboard && cp -R ./node_modules ./monitor-dashboard

WORKDIR /monitor-dashboard

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
RUN $(npm bin)/ng build --prod --build-optimizer


### STAGE 2: Setup ###

FROM nginx:1.13.3-alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

EXPOSE 80

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /monitor-dashboard/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
