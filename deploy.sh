#!/bin/sh

# Load env vars from file if present
if [[ -f .env.deploy ]]; then
    . .env.deploy
fi

VERBOSE=$1
OUT=/dev/null

if [[ "$VERBOSE" == "-v" ]]; then
    OUT=/dev/stdout
fi

# Validate required variables
if [ -z "$SSH_USER" ] || [ -z "$SSH_HOST" ] || [ -z "$REMOTE_PATH" ]; then
    echo "Error: SSH_USER, SSH_HOST, and REMOTE_PATH must be defined in .env.deploy or environment."
    exit 1
fi

WEB_USER="www-data" # Change to "nginx" for RHEL/CentOS/Alpine

echo "Deploying static site to ${SSH_USER}@${SSH_HOST}:${REMOTE_PATH}..."

# 1. Ensure remote directory exists
ssh ${SSH_USER}@${SSH_HOST} "mkdir -p ${REMOTE_PATH}" > $OUT 2>&1
ssh ${SSH_USER}@${SSH_HOST} "sudo chown -R ${SSH_USER}:${SSH_USER} ${REMOTE_PATH} && sudo chmod -R 755 ${REMOTE_PATH}" > $OUT 2>&1

# 2. Clean existing files (scp doesn't sync deletions)
ssh ${SSH_USER}@${SSH_HOST} "find ${REMOTE_PATH} -mindepth 1 -delete" > $OUT 2>&1
if [ $? -ne 0 ]; then
    echo -e "\n⚠️ Warning: Failed to clean remote directory. Continuing anyway..."
fi

# 3. Build 
npm run build

# Copy files using scp (-r = recursive, -p = preserve timestamps/permissions)
scp -rp ./dist/* ${SSH_USER}@${SSH_HOST}:${REMOTE_PATH}/ > $OUT 2>&1
if [ $? -ne 0 ]; then
    echo -e "\n❌ Deployment failed! Check output above."
    exit 1
fi

# Fix ownership & permissions on the remote server
echo "Fixing file permissions..."
ssh ${SSH_USER}@${SSH_HOST} "sudo chown -R ${WEB_USER}:${WEB_USER} ${REMOTE_PATH} && sudo chmod -R 755 ${REMOTE_PATH}" > $OUT 2>&1

if [ $? -ne 0 ]; then
    echo -e "\n⚠️ Warning: Failed to set permissions. You may need to run manually:"
    echo "  ssh ${SSH_USER}@${SSH_HOST} 'sudo chown -R ${WEB_USER}:${WEB_USER} ${REMOTE_PATH}'"
fi

echo -e "\n✅ Deployment successful!"
echo "Finished!"
exit 0