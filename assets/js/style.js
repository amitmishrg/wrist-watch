
// javascript watch code

var get_time = (function() {
    
    var date    =   new Date(), // Date with time 
        hour    =   date.getHours() % 12, // get hours 
        minutes =   date.getMinutes(), // get minutes value
        seconds =   date.getSeconds(), // get second value

        //start deg rotating value
        startDegreeSEC  = -90 + Math.round(seconds * 6),
        startDegreeMIN  = -90 + Math.round(minutes * 6 + (6 / (60 / seconds))),
        startDegreeHR   = -90 + Math.round(hour * 30 + (30 / ((60 / minutes) + (60 / seconds)))),

        // end deg rotating values
        endDegreeSEC    = startDegreeSEC + 360,
        endDegreeMIN    = startDegreeMIN + 360,
        endDegreeHR     = startDegreeHR + 360,
        keyframes       = "",
        prefix          = ['-webkit-', '-moz-', '-o-', '-ms-', '']; // prefix for all browsers

    for (var i = 0, len = prefix.length; i < len; i++) {

        keyframes += "@" + prefix[i] + "keyframes seconds {" +
            "0%{" + prefix[i] + "transform: rotate(" + startDegreeSEC + "deg);}" +
            "to{" + prefix[i] + "transform: rotate(" + endDegreeSEC + "deg);}}" +
            "@" + prefix[i] + "keyframes minutes {" +
            "0%{" + prefix[i] + "transform: rotate(" + startDegreeMIN + "deg);}" +
            "to{" + prefix[i] + "transform: rotate(" + endDegreeMIN + "deg);}}" +
            "@" + prefix[i] + "keyframes hours {" +
            "0%{" + prefix[i] + "transform: rotate(" + startDegreeHR + "deg);}" +
            "to{" + prefix[i] + "transform: rotate(" + endDegreeHR + "deg);}}";
    }

    // create style tag and append it to in head
    var createStyleTag = document.createElement('style');
    createStyleTag.type = 'text/css';
    var rules = document.createTextNode(keyframes);
    createStyleTag.appendChild(rules);
    document.getElementsByTagName("head")[0].appendChild(createStyleTag);

})();

get_time;
