# Use an official Node.js runtime as a parent image
FROM node:18-slim

# Set the working directory in the container to /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Use an ARG to allow flexibility with the port the app uses
ARG APP_PORT=3000
ENV PORT=${APP_PORT}
ENV CLIENT_ID=your-client-id
ENV CLIENT_SECRET=your-client-secret
ENV KEYCLOAK_URL=your-keycloak-url
# Make port available to the world outside this container
EXPOSE ${PORT}

# Run the app when the container launches
CMD [ "node", "index.js" ]
