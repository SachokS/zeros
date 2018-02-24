module.exports = function getZerosCount(number) {
  var a = 0;
    while (number >= 5)
    {number = Math.floor(number/5);
      a = a + number;}
    return(a);
  // your implementation
}
