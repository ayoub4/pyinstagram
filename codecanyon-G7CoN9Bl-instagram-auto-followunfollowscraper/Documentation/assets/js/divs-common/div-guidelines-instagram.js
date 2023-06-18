{
    //let idElement = document.currentScript.parentNode.id;
    let html = `
<div class="card-body">
    <p> <b>GUIDELINES TO AVOID GETTING BANNED AND ALSO GETTING THE BEST RESULTS, THOSE ARE REALLY IMPORTANT RULES, PLEASE READ CAREFULLY:</b></p>
    <p>The term "account" here refers to "Instagram account".</p>
    <ul>
        <li>Please be aware that you will have to wait before getting likes and follow back, but it usually starts during the first hours, for the best results please respect the rules bellow.</li>
        <li>Do not use account with 0 post, else people will have nothing to like on your account and will not follow you back, it is good to have at least 12 quality posts and add posts regularly to keep your account active.</li>
        <li>You need a profile picture.</li>
        <li>A bio is recommended.</li>
        <li>A verified account <img src="../assets/img/instagram/verified.png" alt=""> is a plus, but not necessary.</li>
        <li>Do not make your account private, for the best results, your account content must be public.</li>
        <li>Verify your email on your account, you can also verify your phone number.</li>
        <li><b>Do not use manually your account on any device when the software is running.</b></li>`;
        //for InstaMAX
    // html += `<li><b>If you want to use your account manually on this device, go on <span onclick="SidebarUI.navigateToPage(this, 'accounts.html')" style="box-shadow: 0 0 5px black;border-radius: 5px;margin-right:5px;">
    //                 <i class="fas fa-fw fa-user-circle"></i>
    //                 <span>Accounts</span>
    //             </span> and click on Browse <span class="btn btn-primary btn-circle btn-sm" style="color:white;"><i class="fa-brands fa-chrome"></i></span>.</b></li>`;
    html += `  <li><b>Do not use your account on another software or any Social service.</b></li>
        <li>Target accounts relative to your account's content, by example if your posts are about football, target football fans.</li>
        <li>Do not use many accounts at the same time with the same IP address, if you want run accounts simultaneously, use <a href="#divAdVPNAndProxy">a proxy or VPN</a>.</li>
        <li>Do not set high values for the actions (by example 1000 likes or 200 follow per day) if your account is new or was inactive for a while.</li>
        <li>Do not set low values for the "sleep times", if you do actions too quickly, you will get blocked, by example wait at least 60 seconds between follow requests.</li>
        <li>Try not to follow more than 200 accounts per day, you technically can do more than 200 accounts but it will increase the risk of getting temporary blocked.</li>
        <li>For new account, try not to follow more than 50 accounts per day during the first days, then increase slowly during the next days.</li>
        <li>If you get temporary blocked or banned, please wait at least 24 hours before using your account, even manually.</li>
        <li>On the long term, try to keep a ratio Followers/Following over 1, the higher the better, to calculate your ratio you have to divide your number of Followers by your number of Following.</li>
        <li>If actions do not work but you are not banned, and you do not get any error, check your Internet connection, logout and login again, sometimes resetting the cookie fix this problem.</li>
        <li>Instagram doesn't allow you to follow more than 7500 people. More info on <i>https://help.instagram.com/408167069251249</i>.</li>
        <!-- <li>Twitter allows to follow up to 400 accounts per day (1000 for Verified accounts). Twitter account can follow up to 5000 accounts, then more if the ratio Followers/Following allows it. More info <a target="_blank"
              href="https://help.twitter.com/en/using-twitter/twitter-follow-limit">here</a> and <a target="_blank" href="https://help.twitter.com/en/rules-and-policies/twitter-limits">here</a>. </li> -->
        <li>Instagram has 3 types of limitations on your account to prevent it to make to many requests: Limited, Blocked and Disabled. Limited happens when you do too many requests in a really short time, it is invisible (you can
            only see it by checking the network requests, error 429), your account still can send requests but they will likely be rejected, it is temporary and lasts from few minutes to few hours. Blocked usually happens when your
            got limited too many times or do too many follow/unfollow requests, you still can use your account to browse on Instagram, but you cannot do any action, you will get a popu "Action Blocked", it can last from few hours to few days. Disabled usually happens when you got blocked too many times or with suspicious activity, you might have to contact Instagram to get back
            your account. Your account can be disabled even if you have never been blocked or limited.</li>
        <li>The Instagram limits are not reset at midnight, they also decrease everytime you get blocked or banned.</li>
        <li>You cannot exactly know how many followers you will get, but if you comply with these rules, you can expect up to 50% follow back!</li>
    </ul>
</div>
`;
    $(document.currentScript.parentNode).html(html);
}
