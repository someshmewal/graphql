# Start from Node.js image
FROM node:22

# Set the working directory in the container
WORKDIR /src

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all other source files
COPY . .

# Expose the port that the app will run on
EXPOSE 4001

# Start the server
CMD ["npm", "run", "start"]
