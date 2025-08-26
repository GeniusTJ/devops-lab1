# Use Node.js official image
FROM node:22

# App directory
WORKDIR /app

# Install deps first (better layer caching)
COPY package*.json ./
RUN npm install

# ---- Build-time args (populated by GitHub Actions) ----
ARG PORT=8000
ARG DB_HOST
ARG DB_USER
ARG DB_PASS
ARG DB_NAME
ARG NODE_ENV=development

# Make them available to the app at runtime (this bakes them into the image)
ENV PORT=${PORT} \
    DB_HOST=${DB_HOST} \
    DB_USER=${DB_USER} \
    DB_PASS=${DB_PASS} \
    DB_NAME=${DB_NAME} \
    NODE_ENV=${NODE_ENV}

# Copy source
COPY . .

# Document the port (EXPOSE is informational)
EXPOSE 8000

# Start the app
CMD ["npm", "start"]