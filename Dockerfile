# Specify packages which must be installed:
FROM node:20.11

# Specify directory name for project:
WORKDIR /app 
# you can write this way:
# WORKDIR . 
# but '/app' will be more correct and reliable

# Copy these files to project (to "app" folder) "from" & "to":
COPY . .
# or 
# COPY . /app

# Install node modules by command "npm install":
RUN npm install

# Run server on this port:
EXPOSE 3000

# Run project by this command "node app":
CMD ["node", "server.js"]


