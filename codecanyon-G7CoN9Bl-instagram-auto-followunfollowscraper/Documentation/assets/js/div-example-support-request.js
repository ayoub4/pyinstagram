{
    //let idElement = document.currentScript.parentNode.id;
    let html = `

    <div class="card mb-4 py-3 border-left-secondary m-3">
    <div class="card-body">
        <strong>Example of a good Support Request:</strong>
        <br>
        <br>
        <ul>
            <li><strong>Email</strong>: my@email.com</li>
            <li><strong>Purchase Code / License Key</strong>: xxxxxx-xxxxx-xxxxx-xxxxxx</li>
            <li><strong>Software name and version</strong>: Social Bot - Instagram & Twitter, version 1.7.3</li>
            <li><strong>Operating System</strong>: Windows 7 64bit</li>
            <li><strong>Software configuration</strong>: <ul>
                    <li>Instagram mode: Unfollow your following</li>
                    <li>Headless mode: OFF</li>
                    <li>Web browser path: C:/Program Files (x86)/Google/Chrome/Application/chrome.exe</li>
                </ul>
            </li>
            <li><strong>Description of the problem</strong>: The bot does not scroll down and cannot load more than 24 accounts even if my Following contains 292 accounts</li>
            <li><strong>The full logs</strong>:<br>[instagram][automatize_] The bot cannot load more accounts [16:49:29]<br>[instagram][automatize_] Getting more following... 24[16:49:26]<br>[instagram][automatize_] Scrolling
                down...[16:49:19] <br>[instagram][automatize_] Getting more following... 24[16:49:18]<br>[instagram][automatize_] Scrolling down...[16:49:18]<br>[instagram][automatize_] Number of following of this account:
                294[16:49:18]<br>[instagram][automatize_] Getting 100 following of automatize_...[16:49:11]<br>[instagram][automatize_] Opening following...[16:49:02]<br>[instagram][automatize_] Opening account page of:
                automatize_[16:49:02]<br>[instagram][automatize_] Start unfollow following of your account...[16:48:53]<br>[instagram][automatize_] Validating login...[16:48:49]<br>[instagram][automatize_] Typing
                password...[16:48:42]<br>[instagram][automatize_] Typing username...[16:48:29] <br>[instagram][automatize_] Opening login page...[16:48:29]<br>[instagram][automatize_] Loading...[16:48:29]<br>[instagram][automatize_]
                The web browser is now launched.[16:48:28]<br>[instagram][automatize_] Trying to start the web browser with the path: C:/Program Files (x86)/Google/Chrome/Application/chrome.exe[16:48:28]<br>[instagram][automatize_]
                Configuration: { "username": "automatize_", "botMode": "UnfollowYourFollowings", "id": "automatize__UnfollowYourFollowings", "botType": "instagram", "executablePath": "C:/Program Files
                (x86)/Google/Chrome/Application/chrome.exe", "hashtagsSeparateWithComma": "", "usersSeparateWithComma": null, "maxLikesPerDay": "120", "maxFollowForThisRun": "100", "maxUnfollowForThisRun": "100", "maxFollowPerDay":
                "120", "maxCommentsPerDay": "120", "whitelistAccountsWithComma": "", "commentsWithSemiColon": "", "accountToLikePostsOfItsFollowers": "", "accountsToFollowTheirFollowers": "", "numberOfLikesPerAccount": "3",
                "headlessBrowser": false, "VERSION": "1.1.12", "proxyServer": "", "proxyUsername": "", "proxyPassword": "" } </li>
        </ul>
    </div>
    </div>
`;
    $(document.currentScript.parentNode).html(html);
}
