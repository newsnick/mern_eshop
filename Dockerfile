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
WORKDIR /app

# Copy the package.json and package-lock.json separately to leverage Docker cache
COPY ./frontend/package*.json /app/frontend/
COPY ./package*.json /app/backend/

# Install frontend dependencies
RUN NPM_CONFIG_PRODUCTION=false npm install --force --prefix /app/frontend

# Install backend dependencies
RUN NPM_CONFIG_PRODUCTION=false npm install --force --prefix /app/backend

# Copy the application files into the working directory
COPY . /app

# Build the React application
RUN npm run build --prefix /app/frontend

# Expose port 3000
EXPOSE 3000

# Define the entry point for the container
CMD ["npm", "start"]