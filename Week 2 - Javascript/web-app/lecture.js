const ints = [0,1,2,3,4,5,6,7,8,9,10]

const students = [
    {"name": "Alex", "elective": "Design Psychology"},
    {"name": "Bobby", "elective": "Additive Manufacture"},
    {"name": "Charlie", "elective": "Design Psychology"},
    {"name": "Dale", "elective": "Additive Manufacture"},
    {"name": "Eli", "elective": "Additive Manufacture"},
    {"name": "Frankie", "elective": "Design Psychology"}
]; 

const linear = function(x) {
    const offset =20;
    const scale =5;
    return (x - offset ) / scale;
};

const xs = ints.map(linear);

//const gs = xs.map(function(x) {
//    return Math.exp(-x * x /2);
//});

const gs = xs.map((x) => Math.exp(-x *x /2));

const psychology_students = students.filter(
    function (student) {
        return student.elective === "Design Psychology";
    }
).map(
    function (s) {
        return s.name;
    }
);

const sum = ints.reduce(
    function (accumulator, current_value) {
        return accumulator + current_value;
    }
);

const words = ["Hello", "is", "it", "me"];


const hello_lyrics = words.reduce(
    function (a, x) {
        return a + " " + x;
    }
);


debugger;