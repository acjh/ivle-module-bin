(function () {
    document.addEventListener('DOMContentLoaded', hideNotificationCountWhen0, false);

    function hideNotificationCountWhen0() {
        var count = document.getElementById("notification_count");
        var target = count.querySelector("#echocid");
        var config = { childList: true };
        var observer = new MutationObserver(function (mutations) {
            count.hidden = target.innerText == 0;
        });
        observer.observe(target, config);
    }
})();
