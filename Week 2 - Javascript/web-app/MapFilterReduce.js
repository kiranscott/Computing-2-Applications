const add = (x,y) => {
    return x+ y ;
};

/* map() creates a new array containing the results of a function acting on 
every element in that array */

const array1 = [1,4,9,16];

/*Two ways of creating a new array containing the square roots of the 
numbers in the first array
map((element, index, array) => { ... } )
 */

//const map1 = array1.map(x => Math.sqrt(x));

const map1 = array1.map(function(x) {
    return Math.sqrt(x);
});

/* filter() creates a new array containing all the elements that pass the
test implemented by the provided function */

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const results = words.filter(word => word.length > 6);
// expected output: Array ["exuberant", "destruction", "present"]

function isBigEnough(value) {
    return value >=10
};
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

/* Simple function that searches through an array of words and returns an
 array of the ones contianing the 'Query */
 
function filterItems(array, query) {
    return array.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
};

/* reduce() executed a reducer function on each element of the array, resulting
with a single output value */

const reducer = (accumulator, currentValue) => accumulator + currentValue;
// array1.reduce(reducer); would return 1 + 4 + 9 + 16 

const sum = [0,1,2,3].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);


const flattenend = [[0,1],[2,3],[4,5]].reduce(
    function(accumulator, currentValue) {
        return accumulator.concat(currentValue)
    },[]
);
//flattened is [0,1,2,3,4,5]

const flattened = [[0, 1],[2,3],[4,5]].reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue), 
    []
);

debugger;