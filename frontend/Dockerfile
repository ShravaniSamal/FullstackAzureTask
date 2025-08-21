FROM nginx:alpine

# Remove default nginx site
RUN rm -rf /usr/share/nginx/html/*

WORKDIR /usr/share/nginx/html
COPY index.html .
COPY app.js .
COPY styles.css .
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 8081
ENTRYPOINT ["/entrypoint.sh"]
