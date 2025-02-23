# Start from Node.js image
FROM node:22


# RUN apt-get update && \
#     apt-get install -y default-mysql-client && \
#     rm -rf /var/lib/apt/lists/*

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all other source files
COPY . .

# Expose the port that the app will run on
EXPOSE 8080
# EXPOSE 3306
# EXPOSE 5674
# EXPOSE 15673
# Start the server
CMD ["npm", "run", "start"]
