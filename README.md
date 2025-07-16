Cloudflare workder for custom CF One Gateway block page

1. Create a new worker and upload the worker.js code
2. Modify the link to the logo and support info as needed:
   ```
   <img id="logo" src="https://vplabs.us/acme_corp_logo.png">
   <h1>Access Restricted</h1>
   <p>${safeMsg}</p>
   <p>If you believe this is an error, please contact support.</p>
   <div class="contact">
   Email: support@acme.com<br>
   URL: <a href="https://intranet.acme.com/support">https://intranet.acme.com/support</a><br>
   Phone: +1-800-ACMECORP
   ```
