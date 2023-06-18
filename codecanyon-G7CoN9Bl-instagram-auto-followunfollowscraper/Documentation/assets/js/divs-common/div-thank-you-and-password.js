{
    //let idElement = document.currentScript.parentNode.id;
    let html = ` <div class="card border-left-success shadow h-100 py-2">
        <div id="password" class="card-body">
            <p>Thank you for using my software! You can write a <a href="javascript:openReviewsPage()">review here</a>, I will really appreciate it :) <br><b>Please read the whole documentation</b> to understand how to use the
                software and get more followers! <br>`;
    if (PASSWORD_ZIP != null) {
        html += ` <br> <b> The password to unzip the software is: "${PASSWORD_ZIP}" < /b><br>`;
    }
    html += `</p>
  </div>
</div>`;
    $(document.currentScript.parentNode).html(html);
}
