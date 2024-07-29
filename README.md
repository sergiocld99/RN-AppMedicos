# Proyecto Entregable React Native: App de Turnos Médicos
El proyecto consiste en una aplicación donde el usuario, luego de registrarse en el sistema, puede consultar la cartilla de médicos disponibles y reservar turnos. 
Se encuentra desarrollado en React Native utilizando el framework Expo.

## Índice

* [Instalación](#Instalación)
* [Funcionalides](#Funcionalidades)
* [Librerías empleadas](#Librerías_empleadas)
* [Librerías adicionales](#Librerías_adicionales)
* [Estructura de archivos](#Estructura_de_archivos)

## Instalación
En primer lugar, se debe instalar el CLI del framework mencionado de manera global con el siguiente comando: `npm install --global expo-cli`. 

Luego, la instalación de todas las dependencias necesarias para el funcionamiento de la app se realiza mediante el comando `npm install`, siguiendo el contenido del archivo `package.json`.

El último paso para poder ejecutar el proyecto en modo desarrollo es correr `npm start`, aunque también se puede descargar y abrir directamente en un celular con sistema operativo Android conectado vía USB directamente con el comando `npm run android`.

## Funcionalidades


## Librerías empleadas
En esta sección se describe la justificación y uso de librerías de React, Expo y otros autores.

### React Redux - @reduxjs/toolkit
Redux permite manejar el estado de la aplicación durante su ejecución mediante un Store. 
Está compuesto de slices, la cual a su vez contiene un valor inicial y un conjunto de reducers (acciones), posibilitando la persistencia valores entre diferentes pantallas y la actualización de los mismos. 

- UserSlice: contiene un state con el usuario (email), token (de autenticación), id local (correspondiente a Firebase Authenticator) y la foto de perfil.
- DoctorsSlice: posee un state con la especialidad médica seleccionada y el ID del médico seleccionado por el usuario al navegar por las pantallas.

La creación de estos objetos se encuentra simplificada mediante el uso de Redux Toolkit, abreviado como RTK, que también permite definir APIs para realizar peticiones a Firebase.

- authService: se definen los endpoints para registrarse e iniciar sesión en Authentication.
- doctorListService: posee todos los endpoints para obtención (GET), publicación (POST), actualización (PUT) y eliminación (DELETE) de datos en Realtime Database. Incluye a las consultas para obtener todas las especialidades médicas, los médicos filtrados por especialidad, detalle de un médico según ID, actualización de la foto de perfil del usuario, y por último, la obtención, creación y borrado de turnos del usuario. Se utilizan etiquetas (tags) para invalidar y refrescar la caché cuando se sabe que una consulta debe actualizarse, por ejemplo, el listado de turnos luego de que el usuario crea uno desde la app.

### Yup
Permite definir schemas para validar un conjunto de campos de un formulario antes de enviarlo. De esta manera, permite identificar el campo con error y el mensaje a mostrar en el mismo, en lugar de una información genérica que puede brindar pocos detalles al usuario. Se implementaron 3 casos en este proyecto.

- loginSchema: revisión de email y contraseña requeridos, además de que el campo email posea el formato correspondiente.
- registerSchema: ídem anterior, pero además requiere confirmación de contraseña, que sea igual a la contraseña ingresada, y que posean un mínimo de caracteres.
- appointmentSchema: requisito de fecha y hora obligatorios para el formulario de solicitud de turno.

### expo-sqlite
SQLite es una herramienta de gestión de bases de datos relacional utilizando el lenguaje SQL. Permite la creación de tablas y realizar operaciones de consulta, actualización y borrado de forma local mediante la ejecución de sentencias en el lenguaje mencionado. En este proyecto, posibilita la persistencia de la autenticación del usuario una vez cerrada la aplicación, de modo tal que no es necesario reingresar el email y contraseña de forma reiterativa. La tabla es creada en la primera ejecución, se inserta una fila con los datos de sesión (email, token y localId) luego de autenticarse exitosamente, y se elimina dicha fila al cerrar sesión de forma intencionada.

### expo-image-picker
Esta librería permite el uso de la cámara del dispositivo y el acceso a los archivos. Una de las funciones de la aplicación desarrollada es la actualización de la foto de perfil, y para ello, el usuario puede tomar una foto mediante la cámara, confirmarla y subirla a Firebase. Para el primer paso, es necesario contar con los permisos de uso de dicho hardware y acceso a la galería, lo cual su gestión está simplificada con ImagePicker. También se realiza una transformación de los datos obtenidos de la foto en Base64 para su conversión al formato JPEG.

## Librerías adicionales

### i18n-js
La internacionalización de la aplicación es un aspecto importante considerando la accesibilidad de la misma. Mediante esta librería, se detalla un listado de pares clave-valor para cada idioma a disponibilizar (en este caso inglés y español), de forma tal que el mensaje a mostrar (valor) se obtiene mediante la función `t('clave')`.

## Estructura de archivos
A nivel raíz, se encuentran el archivo App.js con el componente principal de la aplicación, el directorio assets que contiene imágenes locales, y el directorio src (source), cual contenido de cada subdirectorio se describe a continuación.

- /api: posee la clave para el uso de la API de Google Maps.
- /components: componentes JSX que pueden ser utilizados en varias pantallas de la app.
- /constants: constantes numéricas, en este caso solo el mínimo de caracteres necesarios para contraseñas.
- /databases: por un lado tiene las sentencias y consultas SQL para la base de datos `Local`, y por otro lado las URL para los servicios de Authentication y Realtime Database de Firebase en `Remote`.
- /features: slices con valores iniciales y reducers para autenticación (login, logout) y selección en navegación (especialidad y médico).
- /global: colores utilizados de manera general en la app
- /navigation: navegador principal `Navigator`, que se subdivide en el de Login/Registro (AuthStack) y el de pestañas principales (MainTabs), a mostrar según el usuario esté autenticado o no, respectivamente. Los navegadores correspondientes a cada pestaña se encuentran dentro del subdirectorio Tabs.
- /screens: componentes que representan a pantallas completas de la app, que pueden utilizar los archivos de /components. Hay un subdirectorio para Login/Registro (Auth) y uno para cada pestaña principal.
- /services: servicios APIs para realizar peticiones GET, POST, PUT y DELETE en Firebase, por un lado auth (Authentication), y por otro lado doctorList (Realtime Database).
- /store: archivo que representa el Store de Redux, con los slices de /features y los reducers de /services.
- /translations: archivo i18n con los mensajes de toda la aplicación en Inglés y Español.
- /utils: función para la obtención del marginTop según el sistema operativo actual.
- /validations: funciones de chequeo de validez de campos para formularios de login, registro y solicitud de turno.
