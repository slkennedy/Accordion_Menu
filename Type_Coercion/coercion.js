var items = [undefined, null, true, false, "", "1.2", "one", 0, -0, NaN, Infinity, -Infinity, 1, {}, [], [12], ['something'], function(){}]

items.forEach(function(items){
  console.log("Item: " + items + " As a String: " + (items + "")+ " As a Number: " + (+items) + " As a Boolean: " + (!!items));
});
  console.log("\n");
