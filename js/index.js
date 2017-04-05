var n = Number(prompt('Choose a number:'));

function prn(msg) {
    document.write(msg);
}

function fib(n) {
    var a = 1;
    var b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}

prn(fib (n));
