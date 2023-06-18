{
    //let idElement = document.currentScript.parentNode.id;
    let html = `
    <p>Unzip the software using the password given in this documentation, then depending on your operating system, follow the instructions:</p>
    <ul>`;
    if (document.currentScript.dataset.windows) {
        html += `<li><b>Windows</b>: Open the installer .exe file and follow the instructions. You might have to allow your computer to run unsigned/untrusted apps (check your settings on Windows Defender or Windows Security).</li>`;
    }
    if (document.currentScript.dataset.macos) {
        html += `<li><b>macOS</b>: Install the .dmg file (<a target="_blank" href="https://support.apple.com/en-us/HT202491">Safely open apps on your Mac</a> / <a target="_blank"
                    href="https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac">Open a Mac app from an unidentified developer</a>), be sure to grant it enough rights and launch the software
                  from Applications: ${PACKAGE_JSON.name}
              </li>`;
    }
    if (document.currentScript.dataset.linux) {
        html += `<li><b>Linux</b>: Install the .deb or .rpm file (replace "
                      ${PACKAGE_JSON.name}
                  .deb" with the right file path), in a terminal, use one of these commands (choose the one corresponding to your Operating System): <ul>
                      <li>sudo dpkg -i ${PACKAGE_JSON.name}.deb</li>
                      <li>sudo apt install ./${PACKAGE_JSON.name}.deb</li>
                      <li>sudo rpm –i ${PACKAGE_JSON.name}.rpm</li>
                  </ul> And launch the software, by clicking on its icon in your Applications, or type in a terminal: <ul>
                      <li>${PACKAGE_JSON.build.appId}</li>
                  </ul>
              </li>`;
    }
    html += `<p>To update, simply do the same previous steps. </p>`;

    if (true) {
        html += `<div class="card border-left-info shadow h-100">
            <div class="card-body"> NOTE: <br> If you are using any Antivirus or Firewall (Windows Defender, Windows Security...), be sure to allow the software to write files and access to internet, temporary allow your operating system to
                install unsigned/untrusted apps. The software is not signed (or self-signed) because "trusted" code signing certificates are <i>a scam</i> controlled by few centralized companies, and unlike SSL certificate, you cannot get a
                "trusted" certificate without paying a huge fee, anyone who buys their certificate will be automatically "trusted"... They are selling the those certificates for hundreds of dollars per year, even if it costs literally nothing
                to create one, they are just ripping off developers.</div>
        </div>`
    }
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
