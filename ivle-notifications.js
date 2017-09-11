(function () {
    addTemporaryStyle();
    document.addEventListener('DOMContentLoaded', hideNotificationCountWhen0, false);

    var style;

    function addTemporaryStyle() {
        var css = '#notification_count { display: none; }';
        style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        document.documentElement.appendChild(style);
    }

    function hideNotificationCountWhen0() {
        var count = document.getElementById("notification_count");
        var target = count.querySelector("#echocid");
        var config = { childList: true };
        var observer = new MutationObserver(function (mutations) {
            count.hidden = target.innerText == 0;
            removeTemporaryStyle();
        });
        observer.observe(target, config);
    }

    function removeTemporaryStyle() {
        style.remove();
    }
})();
