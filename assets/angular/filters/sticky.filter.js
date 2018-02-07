(function() {
    'use strict';
    stickiesApp.

    filter('stickyFilter', function($sce) {
        const URL_REGEX = /(\b(https?|ftp):\/\/[A-Z0-9+&@#\/%?=~_|!:,.;-]*[-A-Z0-9+&@#\/%=~_|])/gim;
        const EMAIL_REGEX = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;
        const STICKY_LINK_REGEX = /(sticky\/[a-zA-Z0-9]+)/gim;
        const BOLD_REGEX = /(\*)(.*)(\*)/gim;

        return function(text) {
            if (text.match(URL_REGEX)) {
                text = text.replace(URL_REGEX, '<a href="$1">$1</a>');
            }
            if (text.match(EMAIL_REGEX)) {
                text = text.replace(EMAIL_REGEX, '<a href="mailto:$1">$1</a>');
            }
            if (text.match(STICKY_LINK_REGEX)) {
                text = text.replace(STICKY_LINK_REGEX, '<a href="#$1">$1</a>');
            }
            if (text.match(BOLD_REGEX)) {
                text = text.replace(BOLD_REGEX, '<b>$2</b>');
            }
            return $sce.trustAsHtml(text);
        };
    });

})();
