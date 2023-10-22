# prueba-tecnica-hipotecas-backend

# Utilidad de la aplicación

Es muy útil para poder calcular la cuota mensual de una hipoteca, poder almacenar esos datos para cada cliente. Pudiendo también borrar los datos y editarlos tanto la información del cliente
como los datos financieros de esa hipoteca.

## Ver aplicación en producción

https://reliable-eclair-18804e.netlify.app/consultClient

# Como arrancar el el simulador de una hipoteca

## Scripts Disponibles

En este proyecto podremos arrancar con los siguientes scripts:

### `npm start`

Ejecuta la aplicación en modo de desarrollo.\
Abra [http://localhost:3000](http://localhost:3000) para verlo en su navegador.

La página se recargará cuando realice cambios.\
También puede ver errores de pelusa en la consola.

### `npm run dev`
Es exactamente lo mismo que el start pero como estamos ejecutando nodemon, es una librería que hace todo los cambios a tiempo real, por lo que para desarrollar viene muy ejecutarlo.

![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/0d77b4e6-8438-4087-bbfb-721b8ebe7961)



## archivo que necesitamos

### `.env.development`

![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/b642195b-a571-4306-9dff-9e5d734b8d9d)

En este archivo serán las variables que usemos para el desarrollo, usaremos la variable PORT para poner el puerto en el que vamos a ejecutar el servidor y MONGO_URL pondremos la url de conexión con la base de datos, en nuestro caso estamos utilizando mongoDB.

### `.env.production`

![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/5f508a71-7dbd-4c28-a08d-06741469e963)

En este archivo colocaremos exactamente igual las mismas variables de entorno pero cambiando los datos para cuando la utilicemos para producción.

## Paquetes que necesitamos instalar

![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/204ad75b-d1d2-40dc-a865-0baae451aba0)

Es muy probable que cuando arranquemos al darle inspeccionar en consola nos salga errores ya que tenemos que instalar estos paquetes
![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas/assets/105484687/840684d0-72d9-4122-afcd-85a475245d1c)
podéis meteros en la página npm y buscar uno por uno para instalarlo, pero con solo saber el nombre de cada uno de ellos, tan solo poner en la consola npm i [nombre] y ya se instalaría, por ejemplo:
![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/d689d5e5-6d8b-47d2-9824-f8a23a49c554)

# Request de la aplicación
## Users

### Crear Clientes

![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/f1e3aaa7-d3f0-417f-aea2-d482eeb7fba4)

Utilizamos esos datos por ejemplo y al poner esta ruta con metodo post crearemos un cliente.

### Coger información del cliente

![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/f9041e52-158c-45bf-ad08-cb7b29bcdfe8)

Utilizamos esa ruta con el dni del cliente que queremos obtener la información.

### Actualizar Clientes

![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/2794c7b7-72da-4614-9992-069b8ee285dc)

Con esta ruta actualizaremos la info del cliente en la base de datos.

### Eliminar Clientes

![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/b90a6e5a-f438-49f4-b0da-b9586c37462e)

Con esta ruta eliminaremos el cliente, si hacemos un request de coger info del cliente veremos que no existe.

![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/555eb208-d010-4dda-a45c-1dad4d56eca5)

## Finances

### Añadir información de la hipoteca del cliente

![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/89d0361f-fab5-4fea-bb96-16acbfdef169)
![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/016b64de-b03f-4c20-a261-8e8c005cdffd)

Añadimos dos datos para las siguientes pruebas, podemos ver que esta información es creado por el cliente.

### Coger información de la hipoteca del cliente

![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/cff78206-ccdf-449a-bf22-c0ae1fc3cdbf)

podemos ver que tenemos las dos hipotecas del cliente.

### Eliminar todas las informaciones de la hipoteca del cliente

  ![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/a62d4cc5-9d8d-46d4-a98a-2fc02660f555)

  Se ha eliminado todas las informaciones de la hipoteca de ese cliente, ahora haremos el request para coger informacion de la hipoteca del cliente y veremos como esta vacio.
  
  ![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/dc101952-9a00-4b67-996d-9585e7b481bf)

  ahora volveremos a crear las dos hipotecas que creamos anteriormente.

  ### Eliminar una informacion de la hipoteca del cliente

  haremos un get para coger las dos informaciones.

  ![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/7ffb3f71-4999-424a-a9fc-5d5ab9fa8412)

  cogeremos la id de por ejemplo el de la moto.

![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/3a7dc8e5-0936-4fe4-85c6-407ef0181afb)

y al poner en la ruta esa id eliminaremos esa información, haremos un get para comprobarlo.

![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/89a643bd-accd-4cba-8f82-25eaa023b1d1)

 ### Actualizar una informacion de la hipoteca del cliente

  Volveremos a crear la información de la moto y cogeremos su id

  ![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/5c49a8e2-935d-4d56-8df8-a0a2ab6ac3a2)

y haremos el siguiente request

![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/d17cd5f4-155d-42b2-ac32-9496442e01ee)

para comprobar que esta modificado haremos otra vez un get

![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/cc1275f4-5378-4439-8f66-79ea7af79e3d)

Y con eso finalizaremos los request utilizando postman.













