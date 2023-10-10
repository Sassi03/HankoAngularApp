# Use an official Node.js runtime as the base image
FROM node:14 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Angular CLI and dependencies
RUN npm install -g @angular/cli
RUN npm install

# Copy the entire Angular project to the container
COPY . .

# Build the Angular application for production
RUN ng build --configuration=production

# Use a smaller base image for the final image
FROM nginx:latest

# Copy your custom Nginx configuration file into the container
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built Angular app to the NGINX web server directory
COPY --from=builder /app/dist/hanko-angular-app /usr/share/nginx/html

# Expose port 80 for the NGINX server
EXPOSE 8080

# Start NGINX when the container runs
CMD ["nginx", "-g", "daemon off;"]
