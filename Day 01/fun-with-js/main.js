function max(a, b) {
    // if (typeof(a) !== 'number') throw 'a must be a number';
    // if (typeof(b) !== 'number') throw 'a must be a number';

    if (a < b) return b;
    return a;
}

var x = max(15, 5); // return 15
var y = max('15', '5'); // return '5'
var z = max('15', 5); // 15
var w = max(5, '15'); // 15

var v = max('42', {x: '41'});
var u = max({x: 42});
var q = max();
var p = max(1, 2, 3);

