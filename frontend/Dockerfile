# Use Nginx Alpine for small image size
FROM nginx:alpine

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy static files
COPY index.html /usr/share/nginx/html/

# Expose HTTP port
EXPOSE 80

# Install curl for health checks
RUN apk add --no-cache curl

# Health check
HEALTHCHECK --interval=10s --timeout=3s --retries=3 \
    CMD curl -f http://localhost/ || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

