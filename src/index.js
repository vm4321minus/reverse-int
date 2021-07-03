module.exports = function reverse(n) {
    let q = n.toString();
    return parseInt(q.split("").reverse().join(""));
}
