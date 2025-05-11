

FROM node:20

# Maak werkomgeving aan
WORKDIR /app

# Kopieer package-definities en installeer dependencies
COPY package*.json ./
RUN npm install

# Kopieer de rest van de app
COPY . .

# Start de server
CMD ["node", "server.js"]