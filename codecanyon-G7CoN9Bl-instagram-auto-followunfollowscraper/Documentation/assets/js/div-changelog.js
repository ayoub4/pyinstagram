{
    let html = ``
    html += `
<div class="card-header py-3">
  <h4 class="m-0 font-weight-bold text-title-card"> Changelog </h4>
</div>
`;
    html += `<div class="card-body">`;
    html += `<p>Updates history is available here: <a target="_blank" href="https://automatize.v2.nintenda.fr/redirect/softwares/${PACKAGE_JSON.author.itemID}/changelog">CHANGELOG</a></p>`;
    html += `<details>
<summary>Details</summary>`;

    html += `
<strong>3.0.1 - 11/03/2023</strong>
<pre>
- Instagram: fix new layout for Following/Followers list (Instagram released it today)
</pre>
<strong>3.0 - 08/03/2023</strong>
<pre>
- Manifest V3
- Small improvements
</pre>
    <strong>2.972 - 06/08/2022</strong>
    <pre>- Fix new Instagram followers/following popup update
    </pre>
    <strong>2.97 - 03/06/2022</strong>
    <pre>- Fix new Instagram popup update
    </pre>
    <strong>2.96 - 24/04/2022</strong>
    <pre>- Fix image and follow status from SCRAPE mode
    - Add "Optimize memory" option
    </pre>
    <strong>2.8 - 04/08/2021</strong>
    <pre>- Fix long sleep bug
    </pre>
    <strong>2.61 - 21/07/2020</strong>
    <pre>- New way to load accounts with the new Instagram layout
    </pre>
    <strong>2.5 - 12/06/2020</strong>
    <pre>- Fix for the new Instagram layout
    - NOTE: Instagram has a bug on the new layout (it loads all the Followers/Following by itself), it will probably be fixed during the next days, so I will have to update the code again. So please do not open accounts with many Followers/Following, else you might get limited by Instagram.
    </pre>
    <strong>2.2</strong>
    <pre>- Add logs
    - New design
    - Unfollow mode fixed
    - Detect when blocked and wait automatically before doing the next action
    </pre>
`;

    html += `</details>`;
    $(document.currentScript.parentNode).html(html);
}
