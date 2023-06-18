{
    //let idElement = document.currentScript.parentNode.id;
    let html = `
<img class="shadow" src="${IMAGE_INLINE_PREVIEW}" style="max-width:100%"/>
<br>
<br>
<h4>${SOFTWARE_SHORT_DESCRIPTION}</h4>
<p>
Created on ${DATE_CREATION} by ${ PACKAGE_JSON.author.name} <br>Last update: ${DATE_UPDATE} <br>Version: ${PACKAGE_JSON.version}
</p>
`;
    $(document.currentScript.parentNode).html(html);
}
