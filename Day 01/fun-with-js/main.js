function outer() {
    var a = 5;
    console.log('outer', a);

    var inner = function() {
        var b = 10;
        console.log('inner', a);
    }

    return inner;
}


var func = outer();
func();






function max(a, b) {
    // if (typeof(a) !== 'number') throw 'a must be a number';
    // if (typeof(b) !== 'number') throw 'a must be a number';

    if (a < b) return b;
    return a;
}

// // var x = max(15, 5); // return 15
// // var y = max('15', '5'); // return '5'
// // var z = max('15', 5); // 15
// // var w = max(5, '15'); // 15

// // var v = max('42', {x: '41'});
// // var u = max({x: 42});
// // var q = max();
// // var p = max(1, 2, 3);


// // var a = [1, 2, 3];
// // var myFunc = max;

// var o = {};
// var o = new Object();

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    Person.prototype.doSomething = function() {
        console.log('we are doing something');
    }

    this.printToLog = function() {
        console.log('Person ' + this.firstName + ' ' + this.lastName);
    }

    if (!Person.prototype.amountOfPeople) Person.prototype.amountOfPeople = 0;
    Person.prototype.amountOfPeople += 1;
}

var p2 = new Person('jane', 'smith');
var p1 = new Person('john', 'smith');

var m1 = max(10, 20);
var m2 = new max(10, 20);

p1.printToLog();

setTimeout(p2.printToLog.bind(p2), 3000);



