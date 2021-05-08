const newYear = new Date("Jan 1, " + (new Date().getFullYear() + 1) + " 00:00:00").getTime();
// const newYear = new Date("Dec 31, " + (new Date().getFullYear()) + " 17:12:50").getTime();
// const newYear = new Date("Jan, 1 2021 15:41:10");

var countDate = newYear;

var ranOut = new Date().getFullYear();

// function newYearRanOut() {
//     const now = new Date().getTime();
//     gap = newYear - now;

//     if(gap < 0) {
//         var ranOut = new Date().getFullYear();
//     } else {
//         var ranOut = new Date().getFullYear() + 1;
//     }
//     console.log(ranOut);
//     console.log(gap);
// }

const wTY = new Date(new Date().getFullYear() + "-12-24").getTime();
const wNY = new Date((new Date().getFullYear() + 1) + "-12-24").getTime();

function newYearRanOut() {
    const now = new Date().getTime();
    gapTY = wTY - now;
    gapNY = wNY - now;

    arr = [gapTY, gapNY];

    Array.min = function( array ){
        return Math.min.apply( Math, array );
    };

    var minimum = Array.min(arr);

    var ind = arr.indexOf(minimum);

    if(ind == 0) {
        ranOut = new Date().getFullYear() - 1;
    } else {
        ranOut = new Date().getFullYear() + 1;
    }
    console.log(ranOut);
}
newYearRanOut();

// const weihnachten = new Date("2021-12-24").getTime();
// const christmas = new Date("2021-12-25").getTime();
// const easter = new Date("April 12, 2021").getTime();
// const firstapril = new Date("April 1, 2021").getTime();
const weihnachten = new Date((ranOut + 1) + "-12-24").getTime();
const christmas = new Date((ranOut + 1) + "-12-25").getTime();
const easter = new Date("April 12, " + (ranOut + 1)).getTime();
const firstapril = new Date("April 1, " + (ranOut + 1)).getTime();
const heiligedreikings = new Date("Jan 6, " + (ranOut + 1)).getTime();
const nikolaus = new Date("Dec 6, " + (ranOut + 1)).getTime();





function startConfetti() {
    update();draw();
}


function count() {
    const now = new Date().getTime();
    gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    var d = Math.floor(gap / (day));
    var h = Math.floor((gap%(day)) / (hour));
    var m = Math.floor((gap%(hour)) / (minute));
    var s = Math.floor((gap%(minute)) / (second));

    if(s < 0) {
        startConfetti();
        d = 0;
        h = 0;
        m = 0;
        s = 0;
    }

    document.querySelector("#day").innerText = d;
    document.querySelector("#hour").innerText = h;
    document.querySelector("#minute").innerText = m;
    document.querySelector("#second").innerText = s;
}

function calcNext() {
    const now = new Date().getTime();
    gapNY = newYear - now;
    gapW = weihnachten - now;
    gapC = christmas - now;
    gapE = easter - now;
    gapFA = firstapril - now;
    gapHDK = heiligedreikings - now;
    gapN = nikolaus - now;

    arr = [gapNY, gapW, gapC, gapE, gapFA, gapHDK, gapN];

    Array.min = function( array ){
        return Math.min.apply( Math, array );
    };

    var minimum = Array.min(arr);

    var ind = arr.indexOf(minimum);

    if(ind == 0) {
        countDate = newYear;
        document.querySelector("#countertext").innerHTML = "Countdown to New Year <br><span>" + getFirstNumsOfYear() + "<i>" + getLastNumsOfYear() + "</i></span>";
    } else if(ind == 1) {
        countDate = weihnachten;
        document.querySelector("#countertext").innerHTML = "Countdown to Weihnachten <br><span>" + getFirstNumsOfYear() + "<i>" + getLastNumsOfYear() + "</i></span>";
    } else if(ind == 2) {
        countDate = christmas;
        document.querySelector("#countertext").innerHTML = "Countdown to Christmas <br><span>" + getFirstNumsOfYear() + "<i>" + getLastNumsOfYear() + "</i></span>";
    } else if(ind == 3) {
        countDate = easter;
        document.querySelector("#countertext").innerHTML = "Countdown to Easter <br><span>" + getFirstNumsOfYear() + "<i>" + getLastNumsOfYear() + "</i></span>";
    } else if(ind == 4) {
        countDate = firstapril;
        document.querySelector("#countertext").innerHTML = "Countdown to First april <br><span>" + getFirstNumsOfYear() + "<i>" + getLastNumsOfYear() + "</i></span>";
    } else if(ind == 5) {
        countDate = heiligedreikings;
        document.querySelector("#countertext").innerHTML = "Countdown to Heilige Drei Könige <br><span>" + getFirstNumsOfYear() + "<i>" + getLastNumsOfYear() + "</i></span>";
    } else {
        countDate = nikolaus;
        document.querySelector("#countertext").innerHTML = "Countdown to Nikolaus <br><span>" + getFirstNumsOfYear() + "<i>" + getLastNumsOfYear() + "</i></span>";
    }
}

// function getLastNumsOfNextYear() {
//     return ((new Date().getFullYear() + 1).toString().split("")[2] + (new Date().getFullYear() + 1).toString().split("")[3]);
// }

// function getFirstNumsOfNextYear() {
//     return ((new Date().getFullYear() + 1).toString().split("")[0] + (new Date().getFullYear() + 1).toString().split("")[1]);
// }

// function getLastNumsOfThisYear() {
//     return ((new Date().getFullYear() + 1).toString().split("")[2] + (new Date().getFullYear() + 1).toString().split("")[3]);
// }

// function getFirstNumsOfThisYear() {
//     return (new Date().getFullYear().toString().split("")[0] + new Date().getFullYear() + 1).toString().split("")[1];
// }

function getLastNumsOfYear() {
    return ((ranOut + 1).toString().split("")[2] + (ranOut + 1).toString().split("")[3]);
}

function getFirstNumsOfYear() {
    return (ranOut.toString().split("")[0] + ranOut.toString().split("")[1]);
}

setInterval(function() {
    count();
}, 1000);

calcNext();
count();