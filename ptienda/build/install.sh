# echo "Tareas (por etapas) del pipleline Jenkinsfile"

# echo "Instalando la tienda App Pc Compoentes"
# echo "Descargar repositorio de appTienda...."
# echo "Actualizar versiones de los dockerfiler en docker Hub..."
# echo "Realiza el build del proyecto"
# echo "Fases de testeo"
# echo "Martar los contenedores en ejecucion de la version anterior"
# echo "Levantar los nuevos contenedores actualizados"

echo "Desplegando la app de ptienda"

docker-compose -f ptienda/bulid/docker-compose.yml build
docker-compose -f ptienda/build/docker-compose.yml up -d