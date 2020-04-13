var date = new Date();
var nowMonth = date.getMonth() + 1;
var strDate = date.getDate();
var seperator = "-";
if (nowMonth >= 1 && nowMonth <= 9) {
    nowMonth = "0" + nowMonth;
}
if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
}
var nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate;
if (nowDate === '2020-04-04') {
    var htmlDom = document.getElementsByTagName('html')[0];
    var grayscale = 'grayscale(100%)';
    htmlDom.style.setProperty('-o-filter', grayscale);
    htmlDom.style.setProperty('-ms-filter', grayscale);
    htmlDom.style.setProperty('-moz-filter', grayscale);
    htmlDom.style.setProperty('-webkit-filter', grayscale);
    htmlDom.style.setProperty('filter', grayscale);
}
