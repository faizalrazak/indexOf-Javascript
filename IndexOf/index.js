function mutation(arr) {
  var test = arr[1].toLowerCase();
  var newArray = arr[0].toLowerCase();
  
  for(var i=0; i<test.length; i++){
    if(newArray.indexOf(test[i]) === -1){
      return false;
    }
  }
  return true;

}
document.write(mutation(["hello", "hey"]));