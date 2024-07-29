# Proyecto Entregable React Native: App de Turnos Médicos
El proyecto consiste en una aplicación donde el usuario, luego de registrarse en el sistema, puede consultar la cartilla de médicos disponibles y reservar turnos. 
Se encuentra desarrollado en React Native utilizando el framework Expo.

## Índice

* [Instalación](#instalación)
* [Funcionalides](#funcionalidades)
* [Librerías empleadas](#librerías-empleadas)
* [Librerías adicionales](#librerías-adicionales)
* [Estructura de archivos](#estructura-de-archivos)

## Instalación
En primer lugar, se debe instalar el CLI del framework mencionado de manera global con el siguiente comando: `npm install --global expo-cli`. 

Luego, la instalación de todas las dependencias necesarias para el funcionamiento de la app se realiza mediante el comando `npm install`, siguiendo el contenido del archivo `package.json`.

El último paso para poder ejecutar el proyecto en modo desarrollo es correr `npm start`, aunque también se puede descargar y abrir directamente en un celular con sistema operativo Android conectado vía USB directamente con el comando `npm run android`.

## Funcionalidades
Se desarrollaron un conjunto de 12 características disponibles para el usuario utilizando autenticación, persistencia de datos local y remoto, navegación entre pantallas y acceso al hardware del dispositivo.

- [x] Registro del usuario en Firebase mediante email y contraseña.
- [x] Inicio de sesión y guardado de la misma en base de datos local.
- [x] Cierre de sesión desde la barra superior o Header.
- [x] Visualización y selección de especialidades disponibles en la pestaña "Médicos".
- [x] Visualización y selección de médicos según su especialidad, ordenado por apellido y nombre.
- [x] Visualización de los datos, opiniones y ubicación con Google Maps de un médico en particular.
- [x] Visualización de los turnos asignados por orden de fecha y hora.
- [x] Reserva de turnos en una fecha y horario con un médico particular.
- [x] Cancelación directa de turnos desde la pestaña homónima.
- [x] Visualización de la foto de perfil actual en la pestaña "Perfil".
- [x] Actualización de la foto de perfil usando la cámara del dispositivo.
- [x] Aplicación disponible en múltiples idiomas (inglés y español).

### Pestaña Médicos
Se disponen de 5 pestañas accesibles de acuerdo a la siguiente jerarquía.

- Especialidades (Specialties)
  - Médicos (DoctorsOfSpecialty)
    - Detalle del Médico (DoctorDetail)
      - Ubicación (LocationPreview)
      - Solicitud de turno (AppointmentForm)

<img src="https://github.com/user-attachments/assets/03352cd6-3604-4492-90e0-9de9b2f9227b" width="200">
<img src="https://github.com/user-attachments/assets/f20d7573-f2be-48ab-9331-3c9a7599460d" width="200">
<img src="https://github.com/user-attachments/assets/72c85107-536c-4147-b4ab-6b96c6a0c8db" width="200">
<img src="https://github.com/user-attachments/assets/2fc872ce-8da8-4f46-86bb-c7da3d96249b" width="200">

### Pestaña Turnos
<img src="https://github.com/user-attachments/assets/6b4ecea6-1e80-4188-9300-ad8b24fa6462" width="300">
<img src="https://github.com/user-attachments/assets/6193aced-2196-4693-8309-527424cb798a" width="300">


### Pestaña Perfil
<img src="https://github.com/user-attachments/assets/19836ae5-5807-41cc-a12d-a210392241cc" width="300">
<img src="https://github.com/user-attachments/assets/1c844eb8-a614-40b8-b18d-cb8353ab1585" width="300">

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

### React Navigation
Se utilizan las librerías @react-navigation/native, @react-navigation/native-stack y @react-navigation/bottom-tabs. La jerarquía de navegación de la aplicación es la siguiente:

- Navigator: contenedor de navegación principal con `NavigationContainer`, importado de @react-navigation/native.
  - AuthStackNavigator: navegador tipo pila (native-stack) que permite intercambiar entre la pantalla de Login y de Registro.
  - MainTabsNavigator: utiliza pestañas en la parte inferior (bottom-tabs) con íconos y leyendas, que a su vez contienen native stacks.
    - DoctorsStackNav: para intercambiar entre la lista de especialidades (Specialties), lista de médicos de una especialidad (DoctorsOfSpecialty), el detalle de un médico (DoctorDetail), la vista previa de una ubicación (LocationPreview) y el formulario de solicitud de turno (AppointmentForm).
    - AppointmentsStackNav: únicamente contiene la pantalla de turnos asignados al usuario autenticado (AppointmentsScreen).
    - ProfileStackNav: permite navegar entre la vista del perfil autenticado (ProfileScreen) y el gestor de actualización de foto (PictureSelector).

En los native stacks se reemplazan el Header por defecto por un componente encabezado personalizado que permite mostrar el nombre de la pantalla en el idioma correspondiente. 

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

<img src="https://github.com/user-attachments/assets/ffb0abb3-8c53-46bf-93c6-fdbe7db8ca06" width="300">
<img src="https://github.com/user-attachments/assets/671a0da8-1165-4812-862a-30a68bc10a71" width="300">

### DateTimePicker
Se utiliza una librería de la comunidad (@react-native-community/datetimepicker) para mostrar diálogos amigables para el usuario al momento de seleccionar una fecha (a partir del día siguiente al actual) y una hora (hora y minutos) para solicitar un turno. De esta forma, también se evita crear controles más complejos para validar estos campos en dicho formulario.

<img src="https://github.com/user-attachments/assets/90d56c28-7594-4838-a85e-ac6444f5fc8e" width="300">
<img src="https://github.com/user-attachments/assets/d3e1c545-3a3f-46e3-9a0b-b2e07cbe8cef" width="300">

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
