# Define the build argument
ARG ENVIRONMENT

# Development stage
FROM node:18 as local
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start_local" ]

# Production stage
FROM node:18 as dev
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start_dev" ]

# Production stage
FROM node:18 as prod
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start_prod" ]
