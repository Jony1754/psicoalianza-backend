
# Psicoalianza backend

## Introducción

Esta API REST, construida siguiendo los principios de la Arquitectura Limpia (Clean Architecture), permite la gestión de empleados y cargos dentro de una empresa. A través de esta API, los usuarios pueden realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en los registros de empleados y cargos.

## Características

- **Gestión de Cargos**: Permite la creación, lectura, actualización y eliminación de cargos.
- **Gestión de Empleados**: Permite la creación, lectura, actualización y eliminación de empleados.
- **Arquitectura Limpia**: El proyecto sigue los principios de la Arquitectura Limpia, que separa las preocupaciones en capas distintas, facilitando la mantenibilidad y la escalabilidad del código.
- **Seguridad**: Implementa medidas de seguridad, incluyendo la configuración de CORS y el uso de conexiones seguras (como se indica por los archivos de certificados SSL en la raíz del proyecto).

## Tecnologías Utilizadas

- **Node.js**: Plataforma de ejecución para JavaScript en el servidor.
- **Express.js**: Marco de aplicación web para construir APIs REST.
- **MySQL**: Sistema de gestión de bases de datos relacional utilizado para almacenar los datos de la aplicación.
- **AWS RDS**: Servicio de base de datos relacional de AWS, utilizado para alojar la base de datos MySQL.
- **AWS Elastic Beanstalk**: Servicio de AWS utilizado para desplegar y gestionar aplicaciones.

## Estructura del Proyecto

El proyecto sigue una estructura modular claramente definida, que se divide en varias capas:

- `controllers`: Contiene los controladores que manejan las solicitudes HTTP y devuelven las respuestas correspondientes.
- `services`: Contiene los servicios que implementan la lógica de negocio de la aplicación.
- `repositories`: Contiene los repositorios que interactúan con la base de datos para realizar operaciones CRUD.
- `routes`: Define las rutas de la aplicación y asigna las solicitudes HTTP a los controladores correspondientes.
- `database`: Contiene scripts y configuraciones relacionadas con la base de datos.

## API Endpoints

La API ofrece los siguientes endpoints:

### Cargos
- **GET /api/cargos**: Obtiene una lista de todos los cargos.
- **GET /api/cargos/:id**: Obtiene un cargo específico por ID.
- **POST /api/cargos**: Crea un nuevo cargo.
- **PUT /api/cargos/:id**: Actualiza un cargo existente por ID.
- **DELETE /api/cargos/:id**: Elimina un cargo existente por ID.

### Empleados
- **GET /api/empleados**: Obtiene una lista de todos los empleados.
- **GET /api/empleados/:id**: Obtiene un empleado específico por ID.
- **POST /api/empleados**: Crea un nuevo empleado.
- **PUT /api/empleados/:id**: Actualiza un empleado existente por ID.
- **DELETE /api/empleados/:id**: Elimina un empleado existente por ID.

## Configuración y Despliegue

### Requisitos
- Node.js
- MySQL (desplegado en AWS RDS)

### Pasos para el Despliegue
1. Clonar el repositorio.
2. Instalar las dependencias con `npm install`.
3. Configurar las variables de entorno en el archivo `.env`.
4. Iniciar la aplicación con `npm start`.
5. La aplicación estará disponible en `http://localhost:[PUERTO]` (el puerto estará especificado en el archivo `.env`).

## Base de Datos

La base de datos MySQL está desplegada en AWS RDS, proporcionando un entorno de base de datos gestionado y escalable.

## Despliegue en AWS Elastic Beanstalk

La API está desplegada en AWS Elastic Beanstalk, un servicio que facilita el despliegue y la gestión de aplicaciones. Puedes acceder a la API en el siguiente URL: [http://psicoalianzaenv.eba-vev3v6r4.us-east-1.elasticbeanstalk.com/](http://psicoalianzaenv.eba-vev3v6r4.us-east-1.elasticbeanstalk.com/)

## Contacto

Desarrollado con ❤️ por [Jonathan](https://github.com/Jony1754)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
