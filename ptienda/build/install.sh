# echo "Tareas (por etapas) del pipleline Jenkinsfile"

# echo "Instalando la tienda App Pc Compoentes"
# echo "Descargar repositorio de appTienda...."
# echo "Actualizar versiones de los dockerfiler en docker Hub..."
# echo "Realiza el build del proyecto"
# echo "Fases de testeo"
# echo "Martar los contenedores en ejecucion de la version anterior"
# echo "Levantar los nuevos contenedores actualizados"

echo "Desplegando la app de ptienda"

docker-compose -f ptienda/build/Dockerfiles/ubuntu/nest/docker-compose.yml build
docker-compose -f ptienda/build/Dockerfiles/ubuntu/nest/docker-compose.yml up -d

# docker-compose -f ptienda/build/docker-compose.yml build --no-cache
# docker-compose -f ptienda/build/docker-compose.yml down
# docker-compose -f ptienda/build/docker-compose.yml up --remove-orphans





