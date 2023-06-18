{
    //let idElement = document.currentScript.parentNode.id;
    /*
    can get document.currentScript.src and get the args in src: ?arg1=test1
    or simply use attribute or data-set: document.currentScript.dataset
    */
    let html = `<div class="card-body"><b>SET YOUR ACCOUNT IN ENGLISH:</b><br><br>
            <b>Before using the software, you have to set your account to English language</b>: <ul style="padding-top:10px">`;
    if (document.currentScript.dataset.instagram) {
        html += `<li> Change your Instagram language:
                    <ul>
                      <li>(App) Open <i>Settings / Account / Language</i> and select english <a target="_blank" href="https://help.instagram.com/111923612310997"> (reference)</a></li>
                      <li>(Web) Open <a target="_blank" href="https://www.instagram.com/accounts/edit/">Settings</a>, scroll to the bottom of the page then select "<i>English</i>" (next to <i>"© ${(new Date()).getFullYear()} Instagram from Meta"</i>)</li>
                    </ul>
                  </li>`;
    }

    if (document.currentScript.dataset.twitter) {
        html += `<li><a target="_blank" href="https://help.twitter.com/en/managing-your-account/how-to-change-language-settings">Change your Twitter language</a></li>`;
    }
    if (document.currentScript.dataset.skype) {
        html += `<li>(App) Open <i>Settings / General / Language</i> and select english <a target="_blank" href="https://support.skype.com/en/faq/FA34779/how-do-i-change-my-language-in-skype">(reference)</a></li>`;
    }

    html += `</ul>
        </div>`;
    $(document.currentScript.parentNode).html(html);

}
