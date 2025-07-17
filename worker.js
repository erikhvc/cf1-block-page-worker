// Handle all HTTP requests
export default {
  async fetch(request, env) {
    // Only process GET requests
    if (request.method !== 'GET') {
      return new Response('Method not allowed', { status: 405 });
    }

    // Configuration - set your target URL here
    const country = request.cf.country;
    const url = new URL(request.url);
    const msgParam = url.searchParams.get('msg');
    const cf_user_email = decodeURIComponent(url.searchParams.getAll('cf_user_email'));
    const cf_site_uri = decodeURIComponent(url.searchParams.getAll('cf_site_uri'));
    const cf_request_category_names = decodeURIComponent(url.searchParams.getAll('cf_request_category_names'));
    const cf_referer = decodeURIComponent(url.searchParams.getAll('cf_referer'));
    const cf_rule_id = decodeURIComponent(url.searchParams.getAll('cf_rule_id'));
    const cf_source_ip = decodeURIComponent(url.searchParams.getAll('cf_source_ip'));
    const cf_device_id = decodeURIComponent(url.searchParams.getAll('cf_device_id'));
    const cf_application_names = decodeURIComponent(url.searchParams.getAll('cf_application_names'));
    const cf_filter = decodeURIComponent(url.searchParams.getAll('cf_filter'));
    const cf_account_id = decodeURIComponent(url.searchParams.getAll('cf_account_id'));
    const cf_connection_id = decodeURIComponent(url.searchParams.getAll('cf_connection_id'));
    const cf_request_id = decodeURIComponent(url.searchParams.getAll('cf_request_id'));

    var safeMsg;
  
    if (msgParam) {
      safeMsg = decodeURIComponent(msgParam);
    } else {
      safeMsg = "Tu solicitud fue bloqueada por restricciones de seguridad.";
    }

// Custom block page HTML (ACME branded)
const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Acceso Denegado - ErikV Corp</title>
  <style>
    body { 
      font-family: Arial, sans-serif; 
      text-align: center; 
      padding: 50px; 
      background-color: #f8f9fa;
    }
    .logo { 
      color: #e74c3c; 
      font-size: 2.5em; 
      font-weight: bold; 
      margin-bottom: 20px;
    }
    #logo {
      height: 60;
      width: 50;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 25px;
      border-radius: 8px;
      background: white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    h1 { color: #c0392b; }
    p { line-height: 1.6; }
    .contact { 
      margin-top: 25px; 
      padding-top: 15px;
      border-top: 1px solid #eee;
      color: #7f8c8d;
    }
    .contact1 { 
      text-align: left;
      padding-top: 15px;
      padding-left: 55px;
      color: #7f8c8d;
    }
    .column {
      float: left;
      width: 50%;
      padding: 10px;
      color: #7f8c8d;
    }
  </style>
</head>
<body>
  <div class="container">    
    <img id="logo" width="250" height="260" src="https://imagedelivery.net/ih4h24GjSpxgtoKR_JlczQ/218680b9-61eb-479c-e221-8b0938362500/public">
    <h1>Acceso Restringido</h1>
    <p>${safeMsg}</p>
    <p>Si usted cree que esto es un error, favor de contactar a soporte.</p>
    <div class="contact">
      Email: soporte@erikvidaurri.xyz<br>
      URL: <a href="https://erikvidaurri.xyz/soporte">https://erikvidaurri.xyz/soporte</a><br>
      Phone: +1-800-ErikVCorp
    </div>
    <p/p>
    <div class="contact">
    <input type="checkbox" id="showHideCheckbox">
    <label for="showHideCheckbox">Mostrar Detalles</label>
    </dev>
    <div class="contact1" id="targetElement" style="display: none;">
      <table style="border-collapse: collapse; border: none;">
        <tr style="border: none;">
          <td style="border: none;">Correo Usuario:</td>
          <td style="border: none;">${cf_user_email}</td>
        </tr>
        <tr style="border: none;">
          <td style="border: none;">URI Sitio:</td>
          <td style="border: none;">${cf_site_uri}</td>
        </tr>
        <tr style="border: none;">
          <td style="border: none;">Categoria de la Peticion:          </td>
          <td style="border: none;">${cf_request_category_names}</td>
        </tr>
        <tr style="border: none;">
          <td style="border: none;">Referencia:</td>
          <td style="border: none;">${cf_referer}</td>
        </tr>
        <tr style="border: none;">
          <td style="border: none;">ID Regla:</td>
          <td style="border: none;">${cf_rule_id}</td>
        </tr>
        <tr style="border: none;">
          <td style="border: none;">IP Origen:</td>
          <td style="border: none;">${cf_source_ip}</td>
        </tr>
        <tr style="border: none;">
          <td style="border: none;">ID Dispositivo:</td>
          <td style="border: none;">${cf_device_id}</td>
        </tr>
        <tr style="border: none;">
          <td style="border: none;">Nombre Aplicacion:</td>
          <td style="border: none;">${cf_application_names}</td>
        </tr>
        <tr style="border: none;">
          <td style="border: none;">Filtro:</td>
          <td style="border: none;">${cf_filter}</td>
        </tr>
        <tr style="border: none;">
          <td style="border: none;">ID Cuenta:</td>
          <td style="border: none;">${cf_account_id}</td>
        </tr>
        <tr style="border: none;">
          <td style="border: none;">ID Conexion:</td>
          <td style="border: none;">${cf_connection_id}</td>
        </tr>
        <tr style="border: none;">
          <td style="border: none;">ID Peticion:</td>
          <td style="border: none;">${cf_request_id}</td>
        </tr>
      </table>  
    </div>
  </div>
</body>
<script>
const checkbox = document.getElementById('showHideCheckbox');
const targetElement = document.getElementById('targetElement');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    targetElement.style.display = 'block'; // Or 'flex', 'grid', etc.
  } else {
    targetElement.style.display = 'none';
  }
});
</script>
</html>
`;

return new Response(html, {
  headers: { 
    'Content-Type': 'text/html',
    'Cache-Control': 'no-store, max-age=0'
  }
});
}
};
