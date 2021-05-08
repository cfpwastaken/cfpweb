// Function to get a GET Parameter from URI
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

// Color a Counter in green
function gruen(str) {
    document.getElementById(str).style.color = "#92cc41";
}

// Color a Counter in yellow
function gelb(str) {
    document.getElementById(str).style.color = "#f7d51d";
}

// Color a Counter in red
function rot(str) {
    document.getElementById(str).style.color = "#e76e55";
}

// Update a Counter
function count(str) {
    // Get current date
    const ndate = new Date();
    const now = ndate.getTime();
    var handled = false;
    // Calculate gap between now and Date given
    gap = new Date((new Date().getMonth() + 1) + " " + (new Date().getDate()) + ", " + (new Date().getFullYear()) + " " + findGetParameter(str)).getTime() - now;
    // Define important variables
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Milliseconds (gap) to day, hour, minutes, seconds
    var d = Math.floor(gap / (day));
    var h = Math.floor((gap%(day)) / (hour));
    var m = Math.floor((gap%(hour)) / (minute));
    var s = Math.floor((gap%(minute)) / (second));

    const NOO = 1;
    const KK = NOO * 1000;
    const MM = KK * 1000;

    var NO = Math.floor(gap / (NOO));
    var K = Math.floor(gap / (KK));
    var M = Math.floor(gap / (MM));

    NO -= parseInt((K.toString() + "000"));
    K -= parseInt((M.toString() + "000"));
    
    //console.log(gap + ': ' + m + "M " + k + "K " + no);
    //console.log(NO, K, M);
    // console.log("A: " + NO + " " + K + " " + M);
    // console.log("B: " + no + " " + k + " " + m);

    // Color counter
    if(h == 0 && m < 15) {
        gelb(str);
    } else if(s < 0) {
        d = 0;
        h = 0;
        m = 0;
        s = 0;
        gap = 0;
        NO = 0;
        K = 0;
        M = 0;
        gruen(str);
        document.getElementById(str).innerText = "00:00:00";
        handled = true;
    } else {
        rot(str);
    }

    // Convert day, hour, minutes, seconds to strings and
    // add a 0 to the start if needed.
    let dstr = "" + d;
    if(d < 10) dstr = "0" + d;
    let mstr = "" + m;
    if(m < 10) mstr = "0" + m;
    let hstr = "" + h;
    if(h < 10) hstr = "0" + h;
    let sstr = "" + s;
    if(s < 10) sstr = "0" + s;

    let nostr = "" + NO;
    if(NO < 100 && NO > 9) nostr = "0" + nostr;
    if(NO < 9 && NO > 100) nostr = "00" + nostr;
    
    // Finally, set the text with the data
    if(M < 1 && K > 1 && handled == false) {
        document.getElementById(str).innerText = hstr+":"+mstr+":"+sstr+" ("+K+"K "+nostr+")";
        handled = true;
    }
    if(M < 1 && K < 1 && handled == false) {
        document.getElementById(str).innerText = hstr+":"+mstr+":"+sstr+" ("+nostr+")";
        gruen(str);
        handled = true;
    }
    if(handled == false) document.getElementById(str).innerText = hstr+":"+mstr+":"+sstr+" ("+M+"M "+K+"K "+nostr+")";
}

// Update all Counters every millisecond
setInterval(function() {
    count("one");
    count("two");
    count("three");
    count("four");
    count("five");
    count("six");
    
// }, 1000);
}, 1);