{
    //let idElement = document.currentScript.parentNode.id;
    /*
    can get document.currentScript.src and get the args in src: ?arg1=test1
    or simply use attribute or data-set: document.currentScript.dataset
    */
      let html = `
        <div class="card-header py-3">
            <h4 class="m-0 font-weight-bold text-title-card">VPN & Proxy</h4>
        </div>
        <div class="card-body">
            <p>If you are managing multiple accounts simultaneously, it is recommended to use different IP for each account, you can use different IP by using a proxy or VPN. Here are our recommended partners:</p>
			<ul>
			<li>VPN:</li>
			<ul>
			<li><a target="_blank" href="https://automatize.v2.nintenda.fr/redirect/partners/vpn/nordvpn?src=documentation,${PACKAGE_JSON.author.itemID}">NordVPN</a></li>
			<li><a target="_blank" href="https://automatize.v2.nintenda.fr/redirect/partners/vpn/protonvpn?src=documentation,${PACKAGE_JSON.author.itemID}">ProtonVPN</a></li>
			</ul>
			<li>Proxy:</li>
			<ul>
			<li><a target="_blank" href="https://automatize.v2.nintenda.fr/redirect/partners/proxy/brightdata?src=documentation,${PACKAGE_JSON.author.itemID}">Bright Data</a></li>
			</ul>
			</ul>
        </div>`;
        $(document.currentScript.parentNode).html(html);

}
