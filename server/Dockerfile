# Stage 1: Build
FROM node:13 AS build-stage
WORKDIR /app/server
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:dev"]
# Stage 2: Production
FROM node:13
WORKDIR /app/server
COPY --from=build-stage /app/server/dist ./dist
COPY package*.json ./
RUN npm install --only=production
EXPOSE 3000
CMD ["node", "dist/main.js"]