FROM node:18 
WORKDIR / APP
RUN npm install
COPY source dest
RUN npm run build
WORKDIR /path/app/html
