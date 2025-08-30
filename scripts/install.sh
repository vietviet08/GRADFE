    #!/bin/bash

# Install script to handle dependency conflicts
echo "Installing dependencies with conflict resolution..."

# Remove existing node_modules and package-lock
rm -rf node_modules package-lock.json

# Install with legacy peer deps to resolve conflicts
npm install --legacy-peer-deps

echo "Dependencies installed successfully!"

# Optional: Check for vulnerabilities
npm audit --audit-level=moderate
