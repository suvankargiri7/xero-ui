FROM node:22-alpine
WORKDIR /app
COPY package.json .
RUN npm install --force
COPY . .
EXPOSE 4200
CMD ["npm", "run", "start"]
