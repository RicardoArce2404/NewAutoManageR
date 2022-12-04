var lotNames = ['du', 'chi', 'le', 'vi', 'ga', 'gu', 'te', 'cho', 'ham', 'ba', 'in', 'har', 're'];
var lotCosts = [[5, 20], [5, 10], [20, 30], [25, 35], [30, 40], [35, 45], [35, 60], [40, 60], [60, 80], [15, 25], [25, 0], [40, 0], [90, 0]];
var shopStatus = false;
var s1 = '';
var s2 = '';
var s3 = '';
var s4 = '';
// Structure: /chlots s1 s2 s3 s4 clp
// g#p() -> generator#purchaseMode()    g#i() -> generator#interchangeMode()
var r = function (x) { return (x < 1) ? 1 : Math.floor(x); }; // round function
function toggleShop() {
    shopStatus = (shopStatus == true) ? false : true;
    var shopButton = document.querySelector('#ta>button');
    shopButton.style.backgroundColor = (shopStatus == true) ? '#5A5A8C' : '#1E1E1E';
}
function g1p(lot) { s1 = s1.concat("co,".concat(lot, ",")); }
function g2p(id) { s2 = s2.concat("".concat(id, "x2,")); }
function g3p(can, lot) {
    var lotIndex;
    for (var i = 0; i < lotNames.length; i++) {
        if (lotNames[i] == lot) {
            lotIndex = i;
        }
    }
    var lotCost = (shopStatus) ? lotCosts[lotIndex][0] : lotCosts[lotIndex][1];
    var totalCost = lotCost * Number(can);
    s3 = s3.concat("".concat(totalCost, ",").concat(can, ","));
}
function g4p() { s4 = s4.concat('-,+,'); }
function g1i(lot1, lot2) {
    if (lot1 == 'co') {
        if (lot2 == '-') {
            s1 = s1.concat('in,co,co,');
        }
        if (lot2 == 'co') { } // Make an error message
        if (lot2 == 'it') {
            s1 = s1.concat('in,co,in,co,');
        }
        if (lot2 != 'co' && lot2 != 'it') {
            s1 = s1.concat("in,co,".concat(lot2, ",in,").concat(lot2, ",co,"));
        }
    }
    if (lot1 == 'it') {
        if (lot2 == '-') {
            s1 = s1.concat('in,');
        }
        if (lot2 == 'com') {
            s1 = s1.concat('in,co,in,co,');
        }
        if (lot2 == 'it') {
            s1 = s1.concat('in,in,');
        }
        if (lot2 != 'co' && lot2 != 'it') {
            s1 = s1.concat("in,".concat(lot2, ",in,").concat(lot2, ","));
        }
    }
    if (lot1 != 'co' && lot1 != 'it') {
        if (lot2 == '-') {
            s1 = s1.concat("in,".concat(lot1, ",").concat(lot1, ","));
        }
        if (lot2 == 'co') {
            s1 = s1.concat("in,".concat(lot1, ",co,in,co,").concat(lot1, ","));
        }
        if (lot2 == 'it') {
            s1 = s1.concat("in,".concat(lot1, ",in,").concat(lot1, ","));
        }
        if (lot2 != 'co' && lot2 != 'it') {
            s1 = s1.concat("in,".concat(lot1, ",").concat(lot2, ",in,").concat(lot2, ",").concat(lot1, ","));
        }
    }
}
function g2i(lot1, lot2, id1, id2) {
    if (lot1 == 'co') {
        if (lot2 == '-') {
            s2 = s2.concat("".concat(id1, "x2,").concat(id2, ","));
        }
        if (lot2 == 'co') { } // Make an error message
        if (lot2 == 'it') {
            s2 = s2.concat("".concat(id1, "x2,").concat(id2, "x2,"));
        }
        if (lot2 != 'co' && lot2 != 'it') {
            s2 = s2.concat("".concat(id1, "x3,").concat(id2, "x3,"));
        }
    }
    if (lot1 == 'it') {
        if (lot2 == '-') {
            s2 = s2.concat("".concat(id1, ","));
        }
        if (lot2 == 'com') {
            s2 = s2.concat("".concat(id1, "x2,").concat(id2, "x2,"));
        }
        if (lot2 == 'it') {
            s2 = s2.concat("".concat(id1, ",").concat(id2, ","));
        }
        if (lot2 != 'co' && lot2 != 'it') {
            s2 = s2.concat("".concat(id1, "x2,").concat(id2, "x2,"));
        }
    }
    if (lot1 != 'co' && lot1 != 'it') {
        if (lot2 == '-') {
            s2 = s2.concat("".concat(id1, "x2,").concat(id2, ","));
        }
        if (lot2 == 'co') {
            s2 = s2.concat("".concat(id1, "x3,").concat(id2, "x3,"));
        }
        if (lot2 == 'it') {
            s2 = s2.concat("".concat(id1, "x2,").concat(id2, "x2,"));
        }
        if (lot2 != 'co' && lot2 != 'it') {
            s2 = s2.concat("".concat(id1, "x3,").concat(id2, "x3,"));
        }
    }
}
function g3i(lot1, lot2, can1, can2) {
    if (can2 === void 0) { can2 = 0; }
    var L1 = r(can1 / 10);
    var C1 = r(can1 / 300);
    var L2 = r(can2 / 10);
    var C2 = r(can2 / 300);
    if (lot1 == 'co') {
        if (lot2 == '-') {
            s3 = s3.concat("".concat(C1, ",").concat(can1, ",").concat(can1));
        }
        if (lot2 == 'co') { } // Make an error message
        if (lot2 == 'it') {
            s3 = s3.concat("".concat(C1, ",").concat(can1, ",").concat(can2, ",").concat(can1));
        }
        if (lot2 != 'co' && lot2 != 'it') {
            s3 = s3.concat("".concat(C1, ",").concat(can1, ",").concat(can2, ",").concat(L2, ",").concat(can2, ",").concat(can1));
        }
    }
    if (lot1 == 'it') {
        if (lot2 == '-') {
            s3 = s3.concat("".concat(can1));
        }
        if (lot2 == 'com') {
            s3 = s3.concat("".concat(can1, ",").concat(can2, ",").concat(C2, ",").concat(can2));
        }
        if (lot2 == 'it') {
            s3 = s3.concat("".concat(can1, ",").concat(can2));
        }
        if (lot2 != 'co' && lot2 != 'it') {
            s3 = s3.concat("".concat(can1, ",").concat(can2, ",").concat(L2, ",").concat(can1));
        }
    }
    if (lot1 != 'co' && lot1 != 'it') {
        if (lot2 == '-') {
            s3 = s3.concat("".concat(L1, ",").concat(can1, ",").concat(can1));
        }
        if (lot2 == 'co') {
            s3 = s3.concat("".concat(L1, ",").concat(can1, ",").concat(can2, ",").concat(C2, ",").concat(can2, ",").concat(can1));
        }
        if (lot2 == 'it') {
            s3 = s3.concat("".concat(L1, ",").concat(can1, ",").concat(can2, ",").concat(can1));
        }
        if (lot2 != 'co' && lot2 != 'it') {
            s3 = s3.concat("".concat(L1, ",").concat(can1, ",").concat(can2, ",").concat(L2, ",").concat(can2, ",").concat(can1));
        }
    }
}
function g4i(lot1, lot2) {
    if (lot1 == 'co') {
        if (lot2 == '-') {
            s4 = s4.concat('-x2,+');
        }
        if (lot2 == 'co') { } // Make an error message
        if (lot2 == 'it') {
            s4 = s4.concat('-x3,+,');
        }
        if (lot2 != 'co' && lot2 != 'it') {
            s4 = s4.concat('-x2,+,-x2,+,');
        }
    }
    if (lot1 == 'it') {
        if (lot2 == '-') {
            s4 = s4.concat('-,');
        }
        if (lot2 == 'com') {
            s4 = s4.concat('-,+,-x2,');
        }
        if (lot2 == 'it') {
            s4 = s4.concat('-x2,');
        }
        if (lot2 != 'co' && lot2 != 'it') {
            s4 = s4.concat('-,+,-x2,');
        }
    }
    if (lot1 != 'co' && lot1 != 'it') {
        if (lot2 == '-') {
            s4 = s4.concat('-x2,+,');
        }
        if (lot2 == 'co') {
            s4 = s4.concat('-x2,+,-x2,+,');
        }
        if (lot2 == 'it') {
            s4 = s4.concat('-x3,+,');
        }
        if (lot2 != 'co' && lot2 != 'it') {
            s4 = s4.concat('-x2,+,-x2,+,');
        }
    }
}
function genPrev1() {
    var id = document.querySelector('#id>input').value;
    var can = document.querySelector('#can>input').value;
    var lot = document.querySelector('#lot>select').value;
    var prev = document.querySelector('#prev>textarea');
    g1p(lot);
    g2p(id);
    g3p(can, lot);
    g4p();
    prev.value = "/chlots ".concat(s1.slice(0, -1), " ").concat(s2.slice(0, -1), " ").concat(s3.slice(0, -1), " ").concat(s4.slice(0, -1));
}
function genPrev2() {
    var id1 = document.querySelector('#id1>input').value;
    var can1 = document.querySelector('#can1>input').value;
    var lot1 = document.querySelector('#lot1>select').value;
    var id2 = document.querySelector('#id2>input').value;
    var can2 = document.querySelector('#can2>input').value;
    var lot2 = document.querySelector('#lot2>select').value;
    var prev = document.querySelector('#prev>textarea');
    g1i(lot1, lot2);
    g2i(lot1, lot2, Number(id1), Number(id2));
    g3i(lot1, lot2, Number(can1), Number(can2));
    g4i(lot1, lot2);
    prev.value = "/chlots ".concat(s1.slice(0, -1), " ").concat(s2.slice(0, -1), " ").concat(s3.slice(0, -1), " ").concat(s4.slice(0, -1));
}
