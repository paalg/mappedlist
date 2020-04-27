import { MappedList } from '../MappedList';

// Create the object and add data to it
let list = new MappedList();
list.add("1", "Israel");
list.add("2", "Spain");
list.add("3", "England");

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

