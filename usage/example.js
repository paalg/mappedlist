// Create a new list and populate it with some data
var list = new MappedList();
list.add("il", "Israel");
list.add("no", "Norway");
list.add("es", "Spain");
list.add("en", "England");

// Iterate list of IDs, check if each ID is a key in the
// list, and get the object in that case
var ids = ["il", "no", "se"];
ids.forEach(function(id) {
    if (list.has(id)) {
        var value = list.get(id);
        console.log("ID "+id+" has value '"+value+"'");
    }
    else {
        console.log("ID "+id+" does not exist in list");
    }
});

// Delete an element
list.delete("es");

// Get the number of elements in the list
console.log(list.length()); // outputs 3

console.log(list.getKey("Norway")); // Outputs "no"