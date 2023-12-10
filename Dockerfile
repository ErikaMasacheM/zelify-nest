
FROM node:18
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]

# levantar docker
# docker-compose up -d --build --force-recreate
# docker-compose up --build --force-recreate