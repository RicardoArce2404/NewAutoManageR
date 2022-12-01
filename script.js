const lots = [['du', 5, 20], ['chi', 5, 10], ['le', 20, 30], ['vi', 25, 35], ['ga', 30, 40], ['gu', 35, 45], ['te', 35, 60], ['cho', 40, 60], ['ham', 60, 80], ['ba', 15, 25], ['in', 25, 0], ['har', 40, 0], ['re', 90, 0]];

let shopStatus = false;
let s1 = '', s2 = '', s3 = '', s4 = '';

// Estructura: /chlots s1 s2 s3 s4 clp


function toggleShop() {
    shopStatus = (shopStatus == true) ? false : true;
    shopButton = document.querySelector('#ta>button');
    shopButton.style.backgroundColor = (shopStatus == true) ? '#5A5A8C' : '#1E1E1E';
}

function g1(lot) {
    s1 = s1.concat(`co,${lot},`)
}
function g2(id) {
    s2 = s2.concat(`${id}x2,`)
}
function g3(can, lot) {

    let lotIndex; let lotCost; let totalCost;

    for (let i = 0; i < lots.length; i++) { if (lots[i][0] == lot) { lotIndex = i } }
    lotCost = (shopStatus) ? lots[lotIndex][1] : lotCost = lots[lotIndex][2];
    totalCost = lotCost * can;

    s3 = s3.concat(`${totalCost},${can},`)
}
function g4() {
    s4 = s4.concat('-,+,')
}

function genPrev() {

    let id = document.querySelector('#id>input').value;
    let can = document.querySelector('#can>input').value;
    let lot = document.querySelector('#lot>select').value;
    let prev = document.querySelector('#prev>textarea');

    g1(lot); g2(id); g3(can, lot); g4();
    prev.value = `/chlots ${s1.slice(0,-1)} ${s2.slice(0,-1)} ${s3.slice(0,-1)} ${s4.slice(0,-1)}`;
}