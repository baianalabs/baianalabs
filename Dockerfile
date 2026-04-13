# Build and Serve the Node.js + React (Vite) application
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy the package files from the 'site' directory
COPY site/package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the site files
COPY site/ ./

# Build the React application (generates /app/dist)
RUN npm run build

# Change ownership to the node user for security
RUN chown -R node:node /app

# Use the non-root 'node' user
USER node

# Expose the port the app runs on
EXPOSE 3001

# Start the Express server
CMD ["npm", "start"]

