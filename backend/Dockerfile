#Use Node.js LTS Alpine image for smaller size
FROM node:18-alpine

#Set working directory
WORKDIR /app

#Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

#Copy application code
COPY server.js .

#Expose the API port
HEALTHCHECK --interval=30s --timeout=3s \
	CMD wget --quiet --tries=1 --spider http://localhost:3000/health || exit 1

# Start the application
CMD ["npm", "start"]
