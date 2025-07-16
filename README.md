Cloudflare workder for custom CF One Gateway block page

1. Create a new worker and upload the worker.js code
2. Modify the link to the logo and support info (Emailm URL and Phone) as needed:
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
3. Place the following url link in you CF One Gateway block rules with the "Override account setting with URL redirect" option:
   `https://<worker_name>.workers.dev/`
   Above link will no parameters will display the standard message "Your request was blocked due to security restrictions."
4. For custom messages encode the string as following:
   `https://cf-block-page.vik-patel.workers.dev/?msg=This%20site%20is%20blocked%20due%20to%20site%20being%20in%20Security%20Risk%20content%20category.`
   Above will "msg" will display "This site is blocked due to site being in Securit Risk content category." custom message.
5. Check the box marked "Send policy context" to get the details of the block:

   ```
   User Email:	            xxxxxxx
   Site URI:	            xxxxxxx
   Request Category Names:	xxxxxxx
   Referer:	               xxxxxxx
   Rule ID:	               xxxxxxx
   Source IP:	            xxxxxxx
   Device ID:	            xxxxxxx
   Application Names:	   xxxxxxx
   Filter:	               xxxxxxx
   Account ID:	            xxxxxxx
   Connection ID:	         xxxxxxx
   Request ID:             xxxxxxx
   ```
