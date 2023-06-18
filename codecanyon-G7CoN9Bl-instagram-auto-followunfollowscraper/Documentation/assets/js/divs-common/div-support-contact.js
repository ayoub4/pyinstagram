{
    //let idElement = document.currentScript.parentNode.id;
    let html = `
    <div class="card-header py-3">
        <h4 class="m-0 font-weight-bold text-title-card"> Support / Contact</h4>
    </div>`;

    html += `<div class="card-body">`;
    if (document.currentScript.dataset.displayfetcherrorwarning) {
        html += `
      <div class="card border-left-danger shadow h-100 py-2">
          <div class="card-body"> If you have a fetch error while validating the license key, make sure that your internet provider doesn't block any IP (like in China, North Korea, Turkey...). If you are in a limited country, please consider using a VPN.
      </div>
      </div>
      <br>`;
    }
    html += `<p>If you want to add new features, I can build a custom version for you.</p>`;
    html += `<p>Before sending any support request, be sure that you have downloaded the last version of the software. Then if you have a problem, send me a message here: <a href="mailto:${PACKAGE_JSON.author.email}?subject=${SUBJECT_EMAIL_SUPPORT}" target="_blank"></a></p>`;
    html += `<br>
        <br>
        <strong>With these <u>mandatory</u> informations:</strong>
        <ul>
            <li><strong>A video of the problem, from when you start the software to when to problem occurs (Headless mode OFF, if available)</strong></li>
            <li><strong>The full Logs (simply copy/paste them in the email, fully, not just a part)</strong></li>
            <li><strong>Email</strong></li>
            <li><strong>Purchase Code / License Key</strong></li>
            <li><strong>Software name and version</strong></li>
            <li><strong>Operating System</strong></li>
            <li><strong>Configuration</strong></li>
            <li><strong>Description of the problem</strong></li>
        </ul>`;
    html += `<p>You can use the <span class="btn btn-info btn-icon-split">
            <span class="icon text-white-50">
                <i class="far fa-question-circle"></i>
            </span>
            <span class="text">Support request</span>
        </span> button in the software (if available), it will fill most of the informations for you.</p>`;
    html += `</div>`;
    $(document.currentScript.parentNode).html(html);

}
