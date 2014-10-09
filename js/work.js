// Use EACH for the iteration methods discussed in class today (for loop, Array.forEach, 
//  custom forEach) for EACH of the following problems...
// 1. calculate the sum of numbers (can be any number of arguments)
// 2. calculate the average of numbers
// 3. find the largest number of the inputs
// 4. find the longest string of the inputs
// 5. given an array of Date() objects (Oct 4th 2014, Oct 3rd 2014, Sept 30th 2014, 
//       Sept 1st 2012, March 13th 2010), in that order, sort them chronologically. 
//          Use http://devdocs.io/javascript/global_objects/date for reference on creating 
//             Date() objects with a specific date.
//1.
//for loop...
var sum = 0,
    num = [1, 2, 3, 4];

for (var i = 0; i < 5; i++) {
    sum = sum + i;
    console.log(sum);
}; // is 10 because: (0+0) + (0+1) + (0+2) + (0+3) + (0+4) = 1+2+3+4 = 10

//forEach
num.forEach(function(item, index, array) {
    sum += item;
    console.log(sum);
}); // is 10 because: (0+0) + (0+1) + (0+2) + (0+3) + (0+4) = 1+2+3+4 = 10

//2.
// for loop
var bagels = {
    recipeTime1: 60,
    recipeTime2: 90,
    recipeTime3: 120,
    recipeTime4: 180
};
var recipeAverage = function(bread) {
    "use strict";
    var sum = 0;
    for (var index in bread) {
        sum += bread[index];
    }
    return sum / Object.keys(bread).length //is 60+90+120+180 = 450/4 = 112.5
}
console.log(recipeAverage(bagels));

// forEach
var bagels = [60, 90, 120, 180],
    sum = avg = 0;
bagels.forEach(function(n) {
    sum += n;
    avg = sum / bagels.length; // is 60+90+120+180 = 450/4 = 112.5
})
console.log(avg); // avg = 450/4 = 112.5, sum = 450

//3.

//for loop...
var arr = [76, 152, 13, 38];
var largest = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log(largest); // is 152.

//forEach...
arr.forEach(function(i) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
});

//Custom...
Array.prototype.max = function() {
    return Math.max.apply(Math, this);
};
var max = [76, 152, 13, 38].max(); // max === 152.

//4.
// for loop..
function longString(string) {
    var longJohns = string.split(" ");
    var longest = 0;
    var word = null;

    for (var i = 0; i < longJohns.length; i++) {
        if (longest < longJohns[i].length) {
            longest = longJohns[i].length;
            word = longJohns[i];
        }
    };
    return word;
}
console.log(longString("I am earthstuff")); // is 8.

// forEach...
function longString(string) {
    var longJohns = string.split(" ");
    var longest = 0;
    var word = null;
    longJohns.forEach(function(longJohns) {
        if (longest < longJohns.length) {
            longest = longJohns.length;
            word = longJohns;
        }
    });
    return word;
}
console.log(longString("I am earthstuff"));

// Custom



//5.
var dates = [
    new Date(2014, 10, 4),
    new Date(2014, 10, 3),
    new Date(2014, 09, 30),
    new Date(2014, 09, 1),
    new Date(2014, 07, 13)
];

function sortDateForLoop(dates){
    for(var i = 0; i < dates.length; i++){
        findLowestDateAndSwap(null, i, dates);
    }
}

function findLowestDateAndSwap(value, i, array){
    for(var j = i+1; j < dates.length; j++){
        if(+dates[j] < +dates[i]){
            var temp = dates[i];
            dates[i] = dates[j];
            dates[j] = temp;
        }
    }
}

function sortDateForEach(dates){
    dates.forEach(findLowestDateAndSwap);
}

function sortDateCustomForEach(dates){
    forEach(dates, findLowestDateAndSwap);
}