# Use Node.js official image
FROM node:22

# Create app directory inside container
WORKDIR /app

# Copy package.json first and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# App will listen on port 3000
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
