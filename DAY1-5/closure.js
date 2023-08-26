function returnFunction(num) {

  function test(){
    console.log("test");
  }
  test();
  return function() {
    console.log(num * num);
  };
}

var addedfunction = returnFunction(2);
var addedfunction2 = returnFunction(4);

addedfunction();
addedfunction2();
