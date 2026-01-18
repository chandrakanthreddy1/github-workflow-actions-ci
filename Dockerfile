FROM node:18-alpine
WORKDIR /app

# Copy package.json and install dependencies
COPY src/package*.json ./
RUN npm install

# Copy the rest of the source code
COPY src/ .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
