{
    //let idElement = document.currentScript.parentNode.id;
    /*
    can get document.currentScript.src and get the args in src: ?arg1=test1
    or simply use attribute or data-set: document.currentScript.dataset
    */
      let html = `
        <div class="card-header py-3">
            <h4 class="m-0 font-weight-bold text-title-card"><span><sup class="blink" style="color:red;font-size:0.8rem;margin-right:4px;"><b>NEW</b></sup> Insta<sup>MAX</sup></span> </h4>
        </div>
        <div class="card-body center">
            <span style="font-size:0.8rem;">This is a short ad for my new software:</span>
            <p>I'm glad to present you my new Instagram Bot, if you like Social Bot, you will love <b>Insta<sup>MAX</sup></b>, this is the ultimate Instagram automation software. It is available in English and French, more languages will be added soon. <br>And to reward your loyalty, you can get an extra <b>20% OFF</b>
                on top of the current <b>53% OFF</b> limited offer, simply send me an email with your license key to get your <b>20% discount</b>!</p>
            <a target="_blank" href="https://automatize.v2.nintenda.fr/redirect/softwares/instamax?src=documentation,${PACKAGE_JSON.author.itemID}"><img class="" style="width:100%;  filter: drop-shadow(5px 5px 5px #222);" src="assets/img/instamax/banner-instamax.webp" alt="Automatize - InstaMAX" /></a>
        </div>`;
        $(document.currentScript.parentNode).html(html);

}
