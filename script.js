function print_z(z) {
    var inp = document.getElementById('grey').textContent.split(' ')
    if (inp[inp.length - 1][0]) {
        document.getElementById('grey').textContent += " " + z + " ";
        document.getElementById('black').textContent = " " + z + " ";
    }
    else {
        document.getElementById('grey').textContent = document.getElementById('grey').textContent.slice(0, -2) + z + " ";
        document.getElementById('black').textContent = document.getElementById('black').textContent.slice(0, -2) + z + " ";
    }
}


function print_n(n) {
    var inp = document.getElementById('grey').textContent.split(' ');
    if (inp[inp.length - 1].length == 1 && inp[inp.length - 1][0] === '0') {
        document.getElementById('grey').textContent = document.getElementById('grey').textContent.slice(0, -1) + n;
        document.getElementById('black').textContent = document.getElementById('black').textContent.slice(0, -1) + n;
    }
    else {
        let t = document.getElementById('grey').textContent.split(' ');
        if (t[t.length-1] == '') {
            document.getElementById('black').textContent = document.getElementById('black').textContent.slice(2, -1);
        }
        document.getElementById('grey').textContent += n;
        document.getElementById('black').textContent += n;
    }
}


function print_t() {
    var inp = document.getElementById('grey').textContent.split(' ')
    if (inp[inp.length - 1].indexOf('.') == -1 && inp[inp.length - 1][0]) {
        document.getElementById('grey').textContent += '.';
        document.getElementById('black').textContent += '.';
    } 
}


function clear_(elem) {
    document.getElementById('grey').textContent = '0';
    document.getElementById('black').textContent = '0';
}


function cancel_() {
    let gre = document.getElementById('grey');
    let blk = document.getElementById('black');

    if (gre.textContent.length != 1) {
        if (gre.textContent[gre.textContent.length - 1] == ' ') {
            gre.textContent = gre.textContent.slice(0, -3);
            blk.textContent = blk.textContent.slice(0, -3);
        }
        else {
            gre.textContent = gre.textContent.slice(0, -1);
            blk.textContent = blk.textContent.slice(0, -1);
        }
    }
    else {
        gre.textContent = '0';
        blk.textContent = '0';
    }

    let t = gre.textContent.split(' ');
    if (blk.textContent == '') {
        blk.textContent = t[t.length - 1];
    }

    if (blk.textContent == '' && t[t.length - 1] == '') {
        blk.textContent = t[t.length - 2] + " ";
    }
}


function solve_() {
    var inp = document.getElementById('grey').textContent.split(' ');
    if (inp[inp.length - 1] === '') {
        var result = eval(document.getElementById('grey').textContent.slice(0, -3)) 
    }
    else {
        var result = eval(document.getElementById('grey').textContent)
    }

    if (result != Infinity && result != -Infinity) {
        document.getElementById('grey').textContent = (parseInt(result * 10000)) / 10000;
        document.getElementById('black').textContent = (parseInt(result * 10000)) / 10000;
    }
    else {
        document.getElementById('grey').textContent = result;
        document.getElementById('black').textContent = result;
    }
}



cl.addEventListener('mousedown', event => {
    interval = setInterval(() => {
        cancel_();
    }, 150)
})

cl.addEventListener('mouseup', event => {
    clearInterval(interval);
})