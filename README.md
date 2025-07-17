Cloudflare worker para pagina de bloqueo personalizada para CF1 Gateway

<img src="https://imagedelivery.net/ih4h24GjSpxgtoKR_JlczQ/5c72ef1a-4d47-4d9b-4d2e-57e16b4a0000/public" alt="Custom CF One Gateway Block Page" width="600"/>

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
3. Place the following url link in you CF One Gateway block rules with the "Override account setting with URL redirect" option:
   ```
   https://<worker_name>.workers.dev/
   ```
   Above link will no parameters will display the standard message "Tu solicitud fue bloqueada por restricciones de seguridad."
5. For custom messages encode the string as following:
   ```
   https://<worker_name>.workers.dev/?msg=Este%20sitio%20fue%20bloqueado%20por%20riesgo%20de%20seguridad%20utilizando%20la%20Categoria%20Apuestas.
   ```
   Above with `?msg=` will display "Este sitio fue bloqueado por riesgo de seguridad por la Categoria Apuestas." custom message.
7. Check the box marked "Send policy context" to get the details of the block:

```
   User Email:xxxxxxx
   Site URI:xxxxxxx
   Request Category Names:xxxxxxx
   Referer:xxxxxxx
   Rule ID:xxxxxxx
   Source IP:xxxxxxx
   Device ID:xxxxxxx
   Application Names:xxxxxxx
   Filter:xxxxxxx
   Account ID:xxxxxxx
   Connection ID:xxxxxxx
   Request ID:xxxxxxx
```
<img src="https://vplabs.us/gw_block_policy_settings.png" alt="Gateway Policy Settings" width="1100"/>
