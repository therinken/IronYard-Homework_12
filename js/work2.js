// set up arrays
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];

var customers = [
    { firstname : 'Joe', lastname : 'Blogs'},
    { firstname : 'John', lastname : 'Smith'},
    { firstname : 'Dave', lastname : 'Jones'},
    { firstname : 'Jack', lastname : 'White'}
];

var projections = customers.filter(function(c){
    	if(c.firstname.charAt(0) == 'J') {
            return c;
        }
    })
    .map(function(c){
    	return c.firstname + " " + c.lastname;
    })
    .sort(sortByName);


function sortByName(c1, c2) {
    "use strict";
    return c1 > c2 ? 1 : -1;
}

console.log(projections);


