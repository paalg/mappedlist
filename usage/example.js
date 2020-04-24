
// Create a new list and populate it with some data
var list = new MappedList();
list.add("1", "Israel");
list.add("2", "Norway");
list.add("3", "Spain");
list.add("4", "England");

// Iterate list of IDs, check if each ID is a key in the
// list, and get the object in that case
var ids = [1, 4, 5];
ids.forEach(function(id) {
    var key = id.toString(); // convert to string
    if (list.has(key)) {
        var value = list.get(key);
        console.log("ID "+key+" has value '"+value+"'");
    }
    else {
        console.log("ID "+key+" does not exist in list");
    }
});