/*
This is a trick to include content without http server, because usually it says:
"Access to XMLHttpRequest at  'file://...' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, isolated-app, brave, https, chrome-untrusted, data, chrome-extension, chrome."

TODO:
- CANCELLED (i think better to put them in their own div): maybe use append() instead of HTML so i can add few scripts in the same div?
in the HTML:
<div id="myUniqueID" class="card mb-4">
    <script data-arg2="test2" src="assets/js/_div-example.js?arg1=test1"></script>
</div>

use bracket so the "idElement" is unique to this script OR no need ID if i use : $(document.currentScript.parentNode)

not sure if ready() is usefull, but i'm afraid if i don't use it, it'll not close the div properly, but it seems it works well without using the ready

this works too to load script programmatically without server:
// let script = document.createElement("script");
// script.src = `assets/js/div-license.js`;
// document.querySelector('#divLicenseKey').appendChild(script);
*/
{
    // //let idElement = document.currentScript.parentNode.id;
    /*
    can get document.currentScript.src and get the args in src: ?arg1=test1
    or simply use attribute or data-set: document.currentScript.dataset.arg2
    */
    let html = `
<div class="card-header py-3">
  <h4 class="m-0 font-weight-bold text-title-card"> Resell </h4>
</div>
<div class="card-body">
  <a target="_blank" href="https://automatize.v2.nintenda.fr/redirect/services">Click here</a>
</div>
`;
// $(document.currentScript.parentNode).html(html);
$(document.currentScript.parentNode).html(html);
    // $(document).ready(() => {
    //     $( `#${idElement}`).html(html);
    // });

}
