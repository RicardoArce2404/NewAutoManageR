var lotNames = ['du', 'chi', 'le', 'vi', 'ga', 'gu', 'te', 'cho', 'ham', 'ba', 'in', 'har', 're'];
var lotCosts = [[5, 20], [5, 10], [20, 30], [25, 35], [30, 40], [35, 45], [35, 60], [40, 60], [60, 80], [15, 25], [25, 0], [40, 0], [90, 0]];
var shopStatus = false;
var [s1, s2, s3, s4] = ['', '', '', ''];
// Structure: /chlots s1 s2 s3 s4 clp
// g#p() -> generator#purchaseMode()    g#i() -> generator#interchangeMode()
let r = (x) => (x < 1) ? 1 : Math.floor(x); // round function
function toggleShop() {
    shopStatus = (shopStatus == true) ? false : true;
    let shopButton = document.querySelector('#ta>button');
    shopButton.style.backgroundColor = (shopStatus == true) ? '#5A5A8C' : '#1E1E1E';
}
function g1p(lot) { s1 = s1.concat(`co,${lot},`); }
function g2p(id) { s2 = s2.concat(`${id}x2,`); }
function g3p(can, lot) {
    let lotIndex;
    for (let i = 0; i < lotNames.length; i++) {
        if (lotNames[i] == lot) {
            lotIndex = i;
        }
    }
    let lotCost = (shopStatus) ? lotCosts[lotIndex][0] : lotCosts[lotIndex][1];
    let totalCost = lotCost * Number(can);
    s3 = s3.concat(`${totalCost},${can},`);
}
function g4p() { s4 = s4.concat('-,+,'); }
function g1i(lot1, lot2) {
    if (lot1 == 'co') {
        if (lot2 == '-') {
            s1 = s1.concat('in,co,co,');
        }
        else if (lot2 == 'co') { } // Make an error message
        else if (lot2 == 'it') {
            s1 = s1.concat('in,co,in,co,');
        }
        else {
            s1 = s1.concat(`in,co,${lot2},in,${lot2},co,`);
        }
    }
    if (lot1 == 'it') {
        if (lot2 == '-') {
            s1 = s1.concat('in,');
        }
        else if (lot2 == 'co') {
            s1 = s1.concat('in,co,in,co,');
        }
        else if (lot2 == 'it') {
            s1 = s1.concat('in,in,');
        }
        else {
            s1 = s1.concat(`in,${lot2},in,${lot2},`);
        }
    }
    if (lot1 != 'co' && lot1 != 'it') {
        if (lot2 == '-') {
            s1 = s1.concat(`in,${lot1},${lot1},`);
        }
        else if (lot2 == 'co') {
            s1 = s1.concat(`in,${lot1},co,in,co,${lot1},`);
        }
        else if (lot2 == 'it') {
            s1 = s1.concat(`in,${lot1},in,${lot1},`);
        }
        else {
            s1 = s1.concat(`in,${lot1},${lot2},in,${lot2},${lot1},`);
        }
    }
}
function g2i(lot1, lot2, id1, id2) {
    if (lot1 == 'co') {
        if (lot2 == '-') {
            s2 = s2.concat(`${id1}x2,${id2},`);
        }
        else if (lot2 == 'co') { } // Make an error message
        else if (lot2 == 'it') {
            s2 = s2.concat(`${id1}x2,${id2}x2,`);
        }
        else {
            s2 = s2.concat(`${id1}x3,${id2}x3,`);
        }
    }
    if (lot1 == 'it') {
        if (lot2 == '-') {
            s2 = s2.concat(`${id1},`);
        }
        else if (lot2 == 'com') {
            s2 = s2.concat(`${id1}x2,${id2}x2,`);
        }
        else if (lot2 == 'it') {
            s2 = s2.concat(`${id1},${id2},`);
        }
        else {
            s2 = s2.concat(`${id1}x2,${id2}x2,`);
        }
    }
    if (lot1 != 'co' && lot1 != 'it') {
        if (lot2 == '-') {
            s2 = s2.concat(`${id1}x2,${id2},`);
        }
        else if (lot2 == 'co') {
            s2 = s2.concat(`${id1}x3,${id2}x3,`);
        }
        else if (lot2 == 'it') {
            s2 = s2.concat(`${id1}x2,${id2}x2,`);
        }
        else {
            s2 = s2.concat(`${id1}x3,${id2}x3,`);
        }
    }
}
function g3i(lot1, lot2, can1, can2 = 0) {
    let L1 = r(can1 / 10);
    let C1 = r(can1 / 300);
    let L2 = r(can2 / 10);
    let C2 = r(can2 / 300);
    if (lot1 == 'co') {
        if (lot2 == '-') {
            s3 = s3.concat(`${C1},${can1},${can1},`);
        }
        else if (lot2 == 'co') { } // Make an error message
        else if (lot2 == 'it') {
            s3 = s3.concat(`${C1},${can1},${can2},${can1},`);
        }
        else {
            s3 = s3.concat(`${C1},${can1},${can2},${L2},${can2},${can1},`);
        }
    }
    if (lot1 == 'it') {
        if (lot2 == '-') {
            s3 = s3.concat(`${can1},`);
        }
        else if (lot2 == 'com') {
            s3 = s3.concat(`${can1},${can2},${C2},${can2},`);
        }
        else if (lot2 == 'it') {
            s3 = s3.concat(`${can1},${can2},`);
        }
        else {
            s3 = s3.concat(`${can1},${can2},${L2},${can1},`);
        }
    }
    if (lot1 != 'co' && lot1 != 'it') {
        if (lot2 == '-') {
            s3 = s3.concat(`${L1},${can1},${can1},`);
        }
        else if (lot2 == 'co') {
            s3 = s3.concat(`${L1},${can1},${can2},${C2},${can2},${can1},`);
        }
        else if (lot2 == 'it') {
            s3 = s3.concat(`${L1},${can1},${can2},${can1},`);
        }
        else {
            s3 = s3.concat(`${L1},${can1},${can2},${L2},${can2},${can1},`);
        }
    }
}
function g4i(lot1, lot2) {
    if (lot1 == 'co') {
        if (lot2 == '-') {
            s4 = s4.concat('-x2,+,');
        }
        else if (lot2 == 'co') { } // Make an error message
        else if (lot2 == 'it') {
            s4 = s4.concat('-x3,+,');
        }
        else {
            s4 = s4.concat('-x2,+,-x2,+,');
        }
    }
    if (lot1 == 'it') {
        if (lot2 == '-') {
            s4 = s4.concat('-,');
        }
        else if (lot2 == 'com') {
            s4 = s4.concat('-,+,-x2,');
        }
        else if (lot2 == 'it') {
            s4 = s4.concat('-x2,');
        }
        else {
            s4 = s4.concat('-,+,-x2,');
        }
    }
    if (lot1 != 'co' && lot1 != 'it') {
        if (lot2 == '-') {
            s4 = s4.concat('-x2,+,');
        }
        else if (lot2 == 'co') {
            s4 = s4.concat('-x2,+,-x2,+,');
        }
        else if (lot2 == 'it') {
            s4 = s4.concat('-x3,+,');
        }
        else {
            s4 = s4.concat('-x2,+,-x2,+,');
        }
    }
}
function genPrev1() {
    let id = document.querySelector('#id>input').value;
    let can = document.querySelector('#can>input').value;
    let lot = document.querySelector('#lot>select').value;
    let prev = document.querySelector('#prev>textarea');
    g1p(lot);
    g2p(id);
    g3p(can, lot);
    g4p();
    prev.value = `/chlots ${s1.slice(0, -1)} ${s2.slice(0, -1)} ${s3.slice(0, -1)} ${s4.slice(0, -1)}`;
}
function genPrev2() {
    let id1 = document.querySelector('#id1>input').value;
    let can1 = document.querySelector('#can1>input').value;
    let lot1 = document.querySelector('#lot1>select').value;
    let id2 = document.querySelector('#id2>input').value;
    let can2 = document.querySelector('#can2>input').value;
    let lot2 = document.querySelector('#lot2>select').value;
    let prev = document.querySelector('#prev>textarea');
    g1i(lot1, lot2);
    g2i(lot1, lot2, Number(id1), Number(id2));
    g3i(lot1, lot2, Number(can1), Number(can2));
    g4i(lot1, lot2);
    prev.value = `/chlots ${s1.slice(0, -1)} ${s2.slice(0, -1)} ${s3.slice(0, -1)} ${s4.slice(0, -1)}`;
}
const copy = async () => {
    let prev = document.querySelector('#prev>textarea');
    try {
        await navigator.clipboard.writeText(prev.value);
        alert('Copiado');
    }
    catch (e) {
        alert('No se pudo copiar, error: ' + e);
    }
};
function addCLP() {
    let prev = document.querySelector('#prev>textarea');
    if (!prev.value.endsWith('p')) {
        prev.value = prev.value.concat(' clp');
    }
}
