# CF BigCommerce

### Descripción 

Esta aplicacion ... 

### Pre-requisitos 📋

- Docker.

### Instalación 🔧

- Clonar proyecto.
- Copiar el archivo .env.example y renombrarlo con el nombre .env.
- Configurar las variables de entorno del archivo .env.
- Pegar archivo propio `service-account.json` en la carpeta src/gcp, para poder conectarse con los servicios de GCP.
- Ejecutar `docker-compose up` para levantar los servicios. Si es la primera vez que se corre, se construiran los contenedores a partir de la configuracion del archivo docker-compose.yml.

### Pruebas ⚙️

Para ejecutar los tests se debera correr el siguiente comando:

- docker exec -ti companies-marketplaces-list python -m pytest -rB
