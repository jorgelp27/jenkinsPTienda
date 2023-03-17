# Selecciona la versión de Node.js que deseas utilizar
FROM node:18-alpine

# Crea y establece el directorio de trabajo de la aplicación
WORKDIR /app

# Copia el package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia todos los archivos de la aplicación al contenedor
COPY . .

# Compila la aplicación para producción
RUN npm run build
# RUN npm run

# Expone el puerto 3000 para que Nginx pueda comunicarse con la aplicación
EXPOSE 3000

# Inicia la aplicación
CMD ["npm", "start"]