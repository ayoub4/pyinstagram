{
    //let idElement = document.currentScript.parentNode.id;
    let html = `
    <p>This extension is compatible with these web browsers:</p>
    <ul>
            <li>Google Chrome</li>
            <li>Chromium</li>
            <li><a target="_blank" href="https://brave.com/aut757">Brave</a></li>
            <li>Opera</li>
            <li>Microsoft Edge</li>
            <li>Vivaldi</li>
            <li>CCleaner Browser</li>
        </ul>
        <!-- <p>I recommend <a target="_blank" href="https://brave.com/aut757">Brave</a>, it is fast, safe, secure and private, it automatically blocks ads & trackers <b><a target="_blank" href="https://brave.com/aut757">click here to download
                    it</a>.</b></p> -->
        <div class="card mb-4 py-3 border-left-info">
            <h3 style="padding-left:20px"> Installation </h3>
            <hr>
            <div class="card-body">
                <a class="btn btn-primary center" href="#videoInstallation">Watch Installation video</a> or follow the instructions bellow: <br>
                <br>
                <ol>
                    <li>Open the web browser</li>
                    <li>Open your Extensions by opening the url <a target="_blank" href="chrome://extensions">chrome://extensions</a> or clicking on <b>⋮ → More tools → Extensions</b></li>
                    <li>Activate the <b>Developer mode</b> by clicking on the toggle at the top-right corner <br>
                        <img class="shadow" src="assets/developer_mode.png" style="padding-left:40px" />
                        <ul>
                            <li>For Microsoft Edge only: Activate "Allow extensions from other stores."</li>
                        </ul>
                    </li>
                    <li>Choose the extension folder that you just downloaded and unpacked, the folder should be the one containing the file "manifest.json", then click on <b>OK</b>. You can ignore warnings, if you see any error, click on
                        it, it might simply be a warning.</li>
                    <li><b>Close and restart</b> the web browser</li>
                    <li>Click on the extension at the right top corner of the web browser to open the extension, and validate your license key, <b>do NOT close</b> the extension until you get the validation message</li>
                    <li>That's all! You're now ready to increase your followers or scrape accounts!</li>
                </ol>
            </div>
        </div>
        <div class="card mb-4 py-3 border-left-info">
            <h3 style="padding-left:20px"> Update </h3>
            <hr>
            <div class="card-body">
                <b>Do not delete the old version of the extension to install the new version!</b>
                <br> To update the extension, simply replace the old files, in the extension folder, by the new files. Then click on the reload icon on the extension, on the Extensions page (<a target="_blank"
                  href="chrome://extensions">chrome://extensions</a>).</div>
        </div>
        <div class="card border-left-danger shadow h-100">
            <div class="card-body">
              <p><strong>WARNING:</strong></p>
              <ul>
              <li>If you uninstall the extension, move or remove the files, you will have to use your license key again and lose 1 use.</li>
              <li>If you open the extension on the wrong website (example: you open the Instagram extension on Twitter...), navigate or refresh while the extension is running, you might get one of the following errors: "<i>Unchecked runtime.lastError: The message port closed before a response was received</i>" and "<i>Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist</i>", you can ignore them.
            </div>
        </div>`;

    html += `</ul>`;
    $(document.currentScript.parentNode).html(html);
}
/*
<!-- <p>I recommend <a target="_blank" href="https://brave.com/aut757">Brave</a>, it is fast, safe, secure and private, it automatically blocks ads & trackers <b><a target="_blank" href="https://brave.com/aut757">click here to download
                    it</a>.</b></p> -->

<!-- <p>This software works with a web browser, so you first need to install a compatible one from this list: <ul>
        <li>Google Chrome</li>
        <li>Chromium (recommended)</li>
        <li><a target="_blank" href="https://brave.com/aut757">Brave</a></li>
        <li>Opera</li>
        <li>Microsoft Edge</li>
        <li>Vivaldi</li>
        <li>CCleaner Browser</li>
    </ul>
</p> -->
<!-- <p>I recommend <a target="_blank" href="https://brave.com/aut757">Brave</a>, it is fast, safe, secure and private, it automatically blocks ads & trackers <b><a target="_blank" href="https://brave.com/aut757">click here to download
                it</a>.</b></p> -->
                */
