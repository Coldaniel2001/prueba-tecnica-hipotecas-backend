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

![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/ca740a02-5727-4083-afe7-316fddb3ae4a)

En este archivo serán las variables que usemos para el desarrollo, usaremos la variable PORT para poner el puerto en el que vamos a ejecutar el servidor y MONGO_URL pondremos la url de conexión con la base de datos, en nuestro caso estamos utilizando mongoDB.

### `.env.production`

![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/8da7b25b-eb4a-4b43-b337-55539db8a6a0)

En este archivo colocaremos exactamente igual las mismas variables de entorno pero cambiando los datos para cuando la utilicemos para producción.

## Paquetes que necesitamos instalar

![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/204ad75b-d1d2-40dc-a865-0baae451aba0)

Es muy probable que cuando arranquemos al darle inspeccionar en consola nos salga errores ya que tenemos que instalar estos paquetes
![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas/assets/105484687/840684d0-72d9-4122-afcd-85a475245d1c)
podéis meteros en la página npm y buscar uno por uno para instalarlo, pero con solo saber el nombre de cada uno de ellos, tan solo poner en la consola npm i [nombre] y ya se instalaría, por ejemplo:
![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas-backend/assets/105484687/d689d5e5-6d8b-47d2-9824-f8a23a49c554)









