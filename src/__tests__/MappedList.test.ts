import { MappedList } from '../MappedList';

// ----------------------------
// Create the object and add data to it for the first part of testing
// ----------------------------
let list = new MappedList();
list.add("1", "Israel");
list.add("2", "Spain");
list.add("3", "England");

/**
 * Populate the given list with data
 */
function populate() {
    list.add("no", "Norway");
    list.add("se", "Sweden");
    list.add("nor", "Norway");
    list.add("dk", "Denmark");
    list.add("no_bm", "Norway");
    list.add("il", "Israel");
}

// Test adding with key already used
test("add3", ()=> {
    expect(()=>{
        list.add("3", "Norway");
    }).toThrow()
});

// Test getter
test("get1", ()=>{
    expect(list.get("1")).toBe("Israel");
});
test("get2", ()=>{
    expect(list.get("2")).toBe("Spain");
});
test("get3", ()=>{
    expect(list.get("3")).toBe("England");
});
test("get4", ()=> {
    expect(()=>{
        list.get("4");
    }).toThrow()
});

// Testing has
test("has1", ()=>{
    expect(list.has("1")).toBe(true);
});
test("has2", ()=>{
    expect(list.has("2")).toBe(true);
});
test("has3", ()=>{
    expect(list.has("3")).toBe(true);
});
test("has4", ()=>{
    expect(list.has("4")).toBe(false);
});

// Test deleting
test("length1", ()=>{
    expect(list.length()).toBe(3)
});
test("delete1", ()=>{
    expect(list.delete("2")).toBe(true);
});
// Now the list length is 3 after deletion
test("length2", ()=>{
    expect(list.length()).toBe(2);
});
test("delete2", ()=>{
    expect(list.delete("1")).toBe(true);
});
// Test that last element key still is England
test(
    "get5", ()=>{
        expect(list.get("3")).toBe("England")
    }
);
test("delete3", ()=>{
    expect(list.delete("3")).toBe(true);
});

test("length3", ()=>{
    expect(list.length()).toBe(0);
});

// ---------------------------
// Testing searching for value
// ---------------------------

// Get first occurrence of Norway
test("getkey1", ()=>{
    // Add new data first
    populate();
    expect(list.getKey("Norway")).toBe("no")
});
// Re-run will return same key
test("getkey2", ()=>{
    expect(list.getKey("Norway")).toBe("no")
});
// Run with offset -1 searches after previous value
test("getkey3", ()=>{
    expect(list.getKey("Norway", -1)).toBe("nor")
});
// Run with offset -1 searches after previous value
test("getkey4", ()=>{
    expect(list.getKey("Norway", -1)).toBe("no_bm")
});
test("getkey5", ()=>{
    expect(list.getKey("Israel")).toBe("il")
});
// Getting av value that does not exist will return "-1"
test("getkey6", ()=>{
    expect(list.getKey("Great Britain")).toBe("-1")
    list.reset(); // remove all data
});

// Test reset function
test("reset1", ()=>{
    // Make sure we have data populated
    populate();   // populate with data
    list.reset(); // Reset again to make sure there is no data and test shows length=0
    expect(list.length()).toBe(0)
});

test("isEmpty1", ()=>{
    populate();
    expect(list.isEmpty()).toBe(false)
});

test("isEmpty2", ()=>{
    list.reset();
    expect(list.isEmpty()).toBe(true)
});
