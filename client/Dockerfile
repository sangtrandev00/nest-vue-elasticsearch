# Stage 1: Develop
FROM node:11.1-alpine AS develop-stage
WORKDIR /app/client
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Build
FROM node:11.1-alpine AS build-stage
WORKDIR /app/client
COPY --from=develop-stage /app/client ./
RUN npm run build

# Stage 3: Production
FROM nginx:alpine
COPY --from=build-stage /app/client/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]