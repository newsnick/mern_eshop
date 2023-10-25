# # Use the official Node.js image as the base image
# FROM node:18

# # Set the working directory in the container
# WORKDIR /app

# # Copy the application files into the working directory
# COPY . /app

# # Install the application dependencies for frontend
# RUN NPM_CONFIG_PRODUCTION=false npm install --force --prefix frontend

# # Build the React application
# RUN npm run build --prefix frontend

# # Expose port 3000
# EXPOSE 3000

# # Define the entry point for the container
# CMD ["npm", "start"]
# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /

# Copy the backend package files
COPY ./package*.json .

# Install backend dependencies
RUN NPM_CONFIG_PRODUCTION=false npm install --force --prefix frontend && npm run build --prefix frontend

# Copy the frontend package files
COPY ./frontend/package*.json ./frontend/

# Install frontend dependencies
# RUN cd frontend && npm install --production

# Copy the application files into the working directory
COPY . .

# Build the React application
RUN cd frontend && npm run build

# Expose port 3000
EXPOSE 3000

# Define the entry point for the container
CMD ["node", "backend/server.js"]