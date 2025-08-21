#!/bin/sh
set -e

# Default for local testing, override in Azure App Service
: "${API_URL:=http://localhost}"

# Generate config.js dynamically
cat >/usr/share/nginx/html/config.js <<EOF
window.CONFIG = { API_URL: "${API_URL}" };
EOF

# Start nginx
nginx -g 'daemon off;'
