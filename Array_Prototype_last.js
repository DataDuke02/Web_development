Array.prototype.last = function() {
    if (this.length === 0) {
        return -1;
    }

    return this[this.length - 1];
};



/*
const arr = [1, 2, 3];

console.log(arr.last());

output :
3

const arr = [];

console.log(arr.last());

output :
-1

this[this.length - 1]

[10, 20, 30, 40]

this.length = 4
this.length - 1 = 3
this[3] = 40
*/
