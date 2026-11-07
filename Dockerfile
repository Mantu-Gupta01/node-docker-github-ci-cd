# Dockerfile

# Base image
FROM node:18-alpine

# Working directory
WORKDIR /app

# Copy package.json aur lock file
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy baki code
COPY . .

# Expose port
EXPOSE 5000

# Start app
CMD ["node", "index.js"]