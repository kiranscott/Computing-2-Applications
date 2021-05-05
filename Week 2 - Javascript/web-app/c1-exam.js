/**
 * This worksheet adapts the final question of Exam 1 of Computing 1 2020/21.
 * Here you should complete each of the functions as they are specified.
 * Of course, this time, the code is in Javascript.
 *
 * Original Python Code and Exam, Becky Stewart @TheLeadingZero.
 */
const Exam = Object.create(null);

// Lists

// Write a function that returns a list containig every third item in
// the original list starting with the first item.
//    for example:
//      an input list of [1,2,3,4,5,6,7,8]
//      returns [1,4,7]
Exam.every_third = function (array) {
    var arrayRes = [];

    for (var i = 0; i < array.length; i += 3) {
        arrayRes.push(array[i]);
    }

    return arrayRes;
};


// Strings

// Write a function that concatenates two sentences passed as inputs.
// The returned string is the first word from the first sentence,
// then the first word from the second sentence, alternating back forth.
// If the sentences are not the same number of words, a "ValueError" is thrown.
//    for example:
//       the input sentences "the cow jumped over the moon" and
//                            "jack and jill went up the"
//       returns "the jack cow and jumped jill over went the up moon the"
Exam.merge_sentences = function (String1, String2) {
    const Array1 = String1.split(" "),
        Array2 = String2.split(" ");
        
    if (Array1.length !== Array2.length) {
        throw "ValueError";
    } 
    return Array1.flatMap((v, k) => [v, Array2[k]]).join(" ");
};

// Write a function that returns the number of lowercase letters in
// input string.
//     for example:
//          the input "sPonGe bOb"
//          returns 6
Exam.lowercase_count = function (Sentence) {
    var res = 0;
    for (var i = 0; i < Sentence.length; i += 1 ) {
        if (Sentence.charAt(i) == Sentence.charAt(i).toLowerCase()) {
            res += 1 ;
        }
    }
    return res;
};


// Objects

// Write a function that returns the longest a key in the input object
// whose keys are all strings.
Exam.longest_key = function (Obj) {
    const keyArray = Object.keys(Obj);
    const sortedArray = keyArray.sort((a,b) => a.length - b.length);
    return sortedArray[sortedArray.length -1];
};

// Write a function that returns the largest value that is an even value in the
// input dictionary whose values are all whole numbers.
Exam.value_greatest_even = function (Obj) {
    const Vals = Object.values(Obj).sort(function(a, b){return a-b});
    const EvenVals = [];

    for (var i = 0; i < Vals.length; i += 1) {
        if (Vals[i]%2 == 0) {
            EvenVals.push(Vals[i]);
        }
    }

    return Math.max(...EvenVals);
};


// Arguments

// Write a function with two input arguments "username" and "location".
// The function should return text "Hello, {name}, how is {location}?".
//
// The username argument should not be set to a default,
// but the location argument should default to "London".
Exam.greeting = function (username, location = "London") {
    return "Hello, " + username + ", how is " + location + "?"
};


// Write a function three input arguments,
// the first one, x, is required and the second two are
// the following keywords with default values:
//     scalar with a default of 1
//     offset with a default of 0
// The function returns the calculation x * scalar + offset for the input x
// if the output value of the calculation is positive, otherwise it returns 0.
Exam.floor_line = function (x, scalar = 1, offset = 0) {
    const res = x*scalar+offset;
    const output = 0;
    if (res >= 0) {
        output === res;
    }
    return output;

};

export default Object.freeze(Exam);
