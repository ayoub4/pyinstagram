{
    //let idElement = document.currentScript.parentNode.id;
    let html = `
<div class="card-body">
    <ul>
<li>Twitter allows to follow up to 400 accounts per day (1000 for Verified accounts). Twitter account can follow up to 5000 accounts, then more if the ratio Followers/Following allows it. More info <a target="_blank"
              href="https://help.twitter.com/en/using-twitter/twitter-follow-limit">here</a> and <a target="_blank" href="https://help.twitter.com/en/rules-and-policies/twitter-limits">here</a>. </li>
    </ul>
</div>
`;
    $(document.currentScript.parentNode).html(html);
}
