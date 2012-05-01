jquery-konami
=============

easily add the konami code to your webpage

initial code ripped off of [this site](http://www.gethifi.com/blog/konami-code-jquery-plugin-pointlessly-easy). 
and modified to include initial seekAndDestroy callback.

#Usage#

    $(window).konami();

With no arguments, the default "seekAndDestroy" callback will be used. When the user enters the konami code, his cursor will become a crosshair, and every element on the page (except for the html and body tags) can be removed by clicking on it.

Alternatively, you may supply your own callback function and an alternate string of comma-separated keyCodes.

    $(window).konami(callback, "57,33,50,55"); // "yarr"

