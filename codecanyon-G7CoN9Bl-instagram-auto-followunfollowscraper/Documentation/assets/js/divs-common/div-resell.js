{
    //let idElement = document.currentScript.parentNode.id;
    let html = `
    <div class="card-header py-3">
        <h4 class="m-0 font-weight-bold text-title-card"> Resell </h4>
    </div>
    <div id="divResell" class="card-body">
    If you want to resell this app, I have a white-label version (I can personalize it with your product name, logo and texts...), then you can easily generate and sell license keys with the License Keys Manager, more information here: <a target="_blank"
          href="https://automatize.v2.nintenda.fr/redirect/services">Click here</a>
    </div>
`;
    $(document.currentScript.parentNode).html(html);
}
