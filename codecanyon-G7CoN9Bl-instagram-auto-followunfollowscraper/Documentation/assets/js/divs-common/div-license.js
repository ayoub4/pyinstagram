{
    //let idElement = document.currentScript.parentNode.id;
    let html = `
      <div class="card border-left-danger shadow h-100 py-2">
            <div class="card-body">
                <h3 style="padding-left:20px;"> License Key</h3>
                <hr>
                <p style="color:red;">Your license key `;
    if (IS_FOR_ENVATO) {
        html += `(or purchase code, <a target="_blank" href="https://help.market.envato.com/hc/en-us/articles/202822600-Where-Is-My-Purchase-Code-">Where is my purchase code?</a>) `;
    }
    html += `is valid for 3 installations (up to 3 machines) maximum, <br>if your need more, or for commercial use, <a href="mailto:${PACKAGE_JSON.author.email}?subject=${SUBJECT_MORE_LICENSE_KEYS}" target="_blank">contact me here</a>.
                    <br><b>Your license key is personal, you are not allowed to share it.</b>
                    <br>If you want to resell this app, I have a white-label version (I can personalize it with your product name, logo and texts...),<br>then you can easily generate and sell license keys with the <b>License Keys
                        Manager</b>, more info <a target="_blank" href="https://automatize.v2.nintenda.fr/redirect/resell">here</a>.
                </p>
            </div>
        </div>
  `;
    $(document.currentScript.parentNode).html(html);
}
