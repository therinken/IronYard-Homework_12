// set up arrays
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];

var customers = [
    { firstname : 'Joe', lastname : 'Blogs'},
    { firstname : 'John', lastname : 'Smith'},
    { firstname : 'Dave', lastname : 'Jones'},
    { firstname : 'Jack', lastname : 'White'}
];

console.log(customers);

// YOUR CODE WILL GO IN THIS NEXT SECTION
// find all customers whose firstname starts with 'J',
// map() those people into an array of objects like: { name : c.firstname + " " + c.lastname }
// then sort alphabetically

var projections = customers
    customers.filter(function(c){
    	return c.firstname === /J\n/;
    })
    customers.map(function(c){
    	return })
    customers.sort(sortByName);

function sortByName(c1, c2) {
    "use strict";
    return c1 > c2 ? 1 : -1;
}

console.log(projections);