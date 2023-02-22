let hiddenlist = document.querySelectorAll('.hiddenlist');
let hiddendiv = document.querySelectorAll('.dropdown-menu1');

for (let i = 0; i < hiddendiv.length; i++) {
    hiddenlist[i].addEventListener('mouseover', listAppear);
    function listAppear() {
        hiddendiv[i].style.display = 'block';
    }
}
for (let i = 0; i < hiddendiv.length; i++) {
    hiddendiv[i].addEventListener('mouseout', boxhidden);
    function boxhidden() {
        hiddendiv[i].style.display = 'none';
    }
}
for (let i = 0; i < hiddendiv.length; i++) {
    hiddenlist[i].addEventListener('mouseout', listhidden);
    function listhidden() {
        hiddendiv[i].style.display = 'none';
    }
}

let itemsHeight = document.querySelector('#items-height');
let moreInfo = document.querySelector('.more-info');
let itemHeight = itemsHeight.clientHeight;

window.addEventListener('resize', fixinfo);
moreInfo.style.marginTop = itemHeight - 160 + "px";
function fixinfo() {
    itemHeight = itemsHeight.clientHeight;
    moreInfo.style.marginTop = itemHeight - 160 + "px";
}
