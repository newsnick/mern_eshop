# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

# Install the application dependencies for frontend
RUN NPM_CONFIG_PRODUCTION=false npm install --force --prefix frontend

# Build the React application
RUN npm run build --prefix frontend

# Expose port 5000
EXPOSE 5000

# Define the entry point for the container
CMD ["npm", "start"]