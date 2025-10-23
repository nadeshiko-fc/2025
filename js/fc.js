let ff_num = 0;
let hd_num = 0;
let ok_num = 0;
let kr_num = 0;
let sui_num = 0;

function plus_ff() {
    ff_num += 1;
    $('#ff-num').text(ff_num);
    updateTotal();
    return;
}
function minus_ff() {
    if (ff_num > 0) {
        ff_num -= 1;
        $('#ff-num').text(ff_num);
        updateTotal();
    }
}
function plus_hd() {
    hd_num += 1;
    $('#hd-num').text(hd_num);
    updateTotal();
}
function minus_hd() {
    if (hd_num > 0) {
        hd_num -= 1;
        $('#hd-num').text(hd_num);
        updateTotal();
    }
}
function plus_ok() {
    ok_num += 1;
    $('#ok-num').text(ok_num);
    updateTotal();
}
function minus_ok() {
    if (ok_num > 0) {
        ok_num -= 1;
        $('#ok-num').text(ok_num);
        updateTotal();
    }
}
function plus_kr() {
    kr_num += 1;
    $('#kr-num').text(kr_num);
    updateTotal();
}
function minus_kr() {
    if (kr_num > 0) {
        kr_num -= 1;
        $('#kr-num').text(kr_num);
        updateTotal();
    }
}
function plus_sui() {
    sui_num += 1;
    $('#sui-num').text(sui_num);
    updateTotal();
}
function minus_sui() {
    if (sui_num > 0) {
        sui_num -= 1;
        $('#sui-num').text(sui_num);
        updateTotal();
    }
}

function updateTotal() {

    let ffTotal = 200 * ff_num;
    $('#ff-total').text(ffTotal);

    let hdTotal = 300 * hd_num;
    $('#hd-total').text(hdTotal);

    let okTotal = 300 * ok_num;
    $('#ok-total').text(okTotal);

    let krTotal = 100 * kr_num;
    $('#kr-total').text(krTotal);

    let suiTotal = 100 * sui_num;
    $('#sui-total').text(suiTotal);

    let total = ffTotal + hdTotal + okTotal + krTotal + suiTotal;
    $('#totalAll').text(total);
    $('#totalAllforCustomer').text(total);

}

function clearTotal() {
    ff_num = 0;
    hd_num = 0;
    ok_num = 0;
    kr_num = 0;
    sui_num = 0;
    $('#ff-num').text(ff_num);
    $('#hd-num').text(hd_num);
    $('#ok-num').text(ok_num);
    $('#kr-num').text(kr_num);
    $('#sui-num').text(sui_num);
    updateTotal();
}

document.addEventListener('dblclick', function(e){
    e.preventDefault();
});