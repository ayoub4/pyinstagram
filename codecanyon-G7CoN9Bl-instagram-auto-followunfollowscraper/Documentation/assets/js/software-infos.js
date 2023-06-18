const SOFTWARE_SHORT_DESCRIPTION = "Auto follow, unfollow, scrape... Followers, Following and Likes.";
const DATE_CREATION = "01/12/2018";
const DATE_UPDATE = "11/03/2023";
const IMAGE_INLINE_PREVIEW = "assets/img/instagram_extension_preview.jpg";
const IS_FOR_ENVATO = true;
const PASSWORD_ZIP = null;
const PACKAGE_JSON = {
    //extract from the real app package.json
    name: "Instagram Auto Follow/Unfollow/Scraper",
    version: "3.0.1",
    appTitle: "Instagram Auto Follow/Unfollow/Scraper",
    author: {
        name: "Automatize",
        email: "automatize.softwares@gmail.com",
        itemID: "instagram.extension"
    },
    build: {
        appId: "instagram.extension"
    }
};
const URL_REVIEWS = `https://automatize.v2.nintenda.fr/redirect/softwares/${PACKAGE_JSON.author.itemID}/reviews`;
const SUBJECT_EMAIL_SUPPORT = "[SUPPORT REQUEST] " + PACKAGE_JSON.appTitle;
const SUBJECT_MORE_LICENSE_KEYS = "[LICENSE KEYS] More License Keys / Commercial Use - " + PACKAGE_JSON.appTitle;
const INTRO_SOFTWARE_MESSAGE = `
        <p>
            <strong>${PACKAGE_JSON.appTitle}</strong> is the perfect automation tool to grow your audience organically, increase your engagement, your followers and your popularity. </p>
        <p>This extension will <strong>automatically follow, unfollow and scrape, the Followers or the Following of a specific account and the Likes of a specific post (picture or video)</strong>. <br>And it is compatible with many web browsers: Google Chrome,
            Chromium, <a target="_blank" href="https://brave.com/aut757">Brave</a>, <a target="_blank" href="https://addons.opera.com/extensions/details/install-chrome-extensions/">Opera</a>, Microsoft Edge, CCleaner Browser and Vivaldi!</p>
        <p>It is really <strong>easy to use</strong>, you will start to <strong>increase your number of followers</strong> just few minutes after installation. <br>Do you want to generate a database of usernames? Scraping informations manually is tiring and take a lof of time, but with this extension,
            you don't do anything, it does everything for you! <br>You also get the instagram profile pictures of the accounts you scrape, and you will also know if you already follow them or not. <br>This extension allow you to export easily the scraped
            accounts informations to Microsoft Excel XLS file! Also CSV, TXT and HTML, you can generate database in few seconds. <br>You can <strong>start using the extension with few clicks without any knowledge</strong>, but you can also configure this automation tool to increase your
            followers and following faster if you know what you are doing.</p>
        <p> If you need this extension on another web browser, or more features, contact me. </p>`;
document.title = PACKAGE_JSON.appTitle;
