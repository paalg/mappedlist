import { MappedList } from '../MappedList';

// Create the object and add data to it
let list = new MappedList();
list.add("1", "Israel");
list.add("2", "Spain");
list.add("3", "England");

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

//