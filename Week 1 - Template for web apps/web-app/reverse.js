const Reverse = Object.create(null);

// Takes a string and reverses the order of its characters.
Reverse.reverse = function (string) {
    var res = string.split("").reverse().join("");
    return res;
};

export default Object.freeze(Reverse);
