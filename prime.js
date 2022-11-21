function darkmode() {
    var element = document.body;
    element.classList.toggle("darkmode");
 }
 function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementsByTagName('div')[0].style.opacity='0.6';
    document.getElementsByTagName('div')[1].style.opacity='0.6';
    document.getElementsByTagName('div')[2].style.opacity='0.6';
    document.getElementsByTagName('div')[3].style.opacity='0.6';
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementsByTagName('div')[0].style.opacity='1';
    document.getElementsByTagName('div')[1].style.opacity='1';
    document.getElementsByTagName('div')[2].style.opacity='1';
    document.getElementsByTagName('div')[3].style.opacity='1';
}
