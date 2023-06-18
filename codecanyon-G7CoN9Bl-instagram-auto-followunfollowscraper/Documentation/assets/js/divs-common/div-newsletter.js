{
    //let idElement = document.currentScript.parentNode.id;
    let html = `<div class="card-header py-3">
            <h4 class="m-0 font-weight-bold text-title-card"> Newsletter </h4>
        </div>
        <div class="card-body center">
            <p><a target="_blank" href="https://automatize.v2.nintenda.fr/redirect/newsletter"><img class="shadow" src="assets/img/newsletter.png" alt="Automatize - Newsletter" /></a></p>
        </div>
  `;
    $(document.currentScript.parentNode).html(html);
}
