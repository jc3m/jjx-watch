# Assumes static files to serve are in a local build folder
FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /data/www
COPY build /data/www