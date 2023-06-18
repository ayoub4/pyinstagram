{
    //let idElement = document.currentScript.parentNode.id;
    let html = `
    <div class="card-body">
      <p>NOTE:</p>
        <ul>
            <li>On some operating systems, minimizing the software can pause the bot, so do not minimize it but you can keep it running in the background. Also if you close the software, it will stop the bot. </li>
            <li>If you set the Headless Mode on OFF, it will open a web browser window and perform actions on it, <b>do not touch it, do not close it and do not minimize it</b>, but you can keep it running in the background. </li>
            <li>If the Bot detects you have been blocked, it will sleep 6 to 12 hours before the next action.</li>
        </ul>
    </div>
`;
    $(document.currentScript.parentNode).html(html);
}
