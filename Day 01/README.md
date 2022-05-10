Agenda
# Javascript
1. boolean - true, false
2. number
3. string
4. Object
5. Function
6. Null
7. undefined


Paradigms
---------
1. Object Oriented
2. Functional




JAVA - strongly types language
------------------------------
int i = '5';
integer values, float values
string ==== array of char. "x", 'x'
object - base of all types

object o = 5;

class Person {
    string firstName
}

Person p = new Person();
p.firstName = 'John';

p.lastName = 'Smith';


Javascript - loosly types language
----------------------------------
var i = 5 + 2.0
var s = 'hello', "hello", `hello`

object === dictionary, map, hashtable

var o = {
    x: null, 
    y: 12, 
    z: true, 
    a: {
        hello: 17.5
    }, 
    12: 'hello'
};

o['y'] === 12
o.y === 12
o.firstName = 'John';

var f = function() {
    console.log('Hello world');
}

var f1 = f;
f1();
f();

var f2 = function(a) {
    a();
}

f2(f);


var i = 5;
typeof(i) -----> 'number';
var x;
typeof(x) ------> 'undefined';

typeof(y) ------> 'undefined';
y = 45;

var i = 'hello';
var i = undefined;

var z = {};
console.log(z.a);




### Javascript types and gotchas
* We have Convered the 7 types of javascript: boolean, number, string, object, function, null and undefined
* We have seen how to use JSON to describe complex object values
* We have seen the true meaning of the `new` and `this` keywords, and most specifically - that they do not have the same meaning as in Java.
* We learned how to use the `prototype` to expose common functionality to all objects create by the same constructor
* We have experienced the problem of the missing `this` context