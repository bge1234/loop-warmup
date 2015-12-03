function letters(oldString) {
  var oldArray = oldString.split("");
  var newArray = [];
  if(oldArray.length % 2 === 1) {
    for(var i = 0; i < oldArray.length; i+=2) {
      newArray.push(oldArray[i]);
    };
  }
  else {
    for(var i = 1; i < oldArray.length; i+=2) {
      newArray.push(oldArray[i]);
    };
  };
  return newArray.join("");
};

console.log(letters("stuff"));
