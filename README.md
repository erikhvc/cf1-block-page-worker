Cloudflare worker para pagina de bloqueo personalizada para CF1 Gateway

<img src="https://imagedelivery.net/ih4h24GjSpxgtoKR_JlczQ/26dbe1da-c4ae-4eb9-6e3f-4e5588226f00/public" alt="Custom CF One Gateway Block Page" width="600"/>

1. Crea un nuevo worker y carga el codigo del archivo worker.js
2. Modifica la liga del logo y la informacion de soporte (Correo, URL y Telefono) conforme se nencesite:
   ```
   <img id="logo" width="250" height="260" src="https://imagedelivery.net/ih4h24GjSpxgtoKR_JlczQ/218680b9-61eb-479c-e221-8b0938362500/public">
   <h1>Acceso Restringido</h1>
   <p>${safeMsg}</p>
   <p>Si usted cree que esto es un error, favor de contactar a soporte.</p>
   <div class="contact">
   Correo: soporte@erikvidaurri.xyz<br>
   URL: <a href="https://erikvidaurri.xyz/soporte">https://erikvidaurri.xyz/soporte</a><br>
   Telefono: +1-800-ErikVCorp
   ```
3. Agrega la siguiente url en tu politica de bloqueo de Gateway con la opcion seleccionada "Anular el ajuste de la cuenta con URL de redirección":
   ```
   https://<worker_name>.workers.dev/
   ```
   El siguiente link sin parametros desplegara el mensaje estandar: "Tu solicitud fue bloqueada por restricciones de seguridad."
5. Para un mensaje personalizado en la politica, agregar la siguiente secuencaa de caracteres como sigue:
   ```
   https://<worker_name>.workers.dev/?msg=Este%20sitio%20fue%20bloqueado%20por%20riesgo%20de%20seguridad%20utilizando%20la%20Categoria%20Apuestas.
   ```
   El link anterior con `?msg=` mostrara "Este sitio fue bloqueado por riesgo de seguridad utilizando la Categoria Apuestas." como mensaje.
7. Marca la caja "Enviar contexto de política" esto para tener los detalles del bloqueo:

```
   Correo Usuario: xxxxxxx
   URI Sitio: xxxxxxx
   Categoria de la Peticion: xxxxxxx
   Referencia: xxxxxxx
   ID Regla: xxxxxxx
   IP Origen: xxxxxxx
   ID Dispositivo: xxxxxxx
   Nombre Aplicacion: xxxxxxx
   Filtro: xxxxxxx
   ID Cuenta: xxxxxxx
   ID Conexion: xxxxxxx
   ID Peticion: xxxxxxx
```
<img src="https://imagedelivery.net/ih4h24GjSpxgtoKR_JlczQ/15f3a655-7a20-4743-957c-f6ab43e5b000/public" alt="Gateway Policy Settings" width="1100"/>
