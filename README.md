#  Taller 3er Corte - Registro Multimedia con Angular, Firebase y Supabase

Este proyecto es una aplicación móvil desarrollada con **Ionic + Angular**, que permite a los usuarios **capturar una imagen, escribir una descripción** y guardar ambos datos junto con la **fecha y hora actual**.

##  Funcionalidades

-  Captura de imagen usando la cámara del dispositivo.
-  Edición rápida antes de guardar la imagen.
-  Ingreso de una descripción (obligatoria).
-  Registro automático de fecha y hora.
-  Almacenamiento de:
  - Imagen en **Supabase Storage**
  - Datos (descripción, imagen URL y fecha) en **Firebase Firestore**
-  Visualización de registros en pantalla.

##  Tecnologías Usadas

- Ionic Framework + Angular
- Capacitor
- Firebase (Firestore)
- Supabase (Storage)
- Capacitor Preferences


##  Captura de Pantalla

(Agrega aquí una imagen o gif de la app funcionando, si puedes)

##  Instalación y Ejecución

```bash
npm install
ionic cap sync
ionic serve         # Para pruebas web
ionic cap open android  # Para abrir en Android Studio
