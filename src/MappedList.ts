/**
 * A mapped list
 *
 * This implementation is using one array for data and one array for keys. The ID of the
 * keys are the same as the ID for the corresponding value. Only strings are allowed
 * for keys and values in this version.
 *
 * This is the first version that is not optimized.
 *
 * @author Pål Gjerde Gammelsæter
 * @link https://github.com/paalg/mappedlist
 * @version 1.2.0
 */
class MList {

    /**
     * Array with values. IDs in data and keys match.
     */
    private data:string[] = [];

    /**
     * Array with keys. IDs in data and keys match.
     */
    private keys:string[] = [];

    /**
     * The last index in arrays data and keys
     */
    private lastIndex:number = 0;

    /**
     * This is the id where the last found value was found by function
     * getKey(). This value can be used to set an offset value when rerunning that
     * function.
     */
    private lastFoundValueId = 0;

    /**
     * Add element to the list
     * @param key
     * @param value
     * @throws Error If you try to use a key that is already used
     */
    public add(key:string, value:string) {
        if (this.has(key)) {
            throw new Error("Key already exists");
        }
        else {
            let id = this.lastIndex++;
            this.data[id] = value;
            this.keys[id] = key;
        }
    }

    /**
     * Get element associated with given key
     * @param key
     * @return string
     * @throws RangeError
     */
    public get(key:string):string {
        // Get first occurrence of key in the array
        let id = this.keys.indexOf(key);
        if (id === -1) {
            throw new RangeError("Illegal key value");
        }
        else {
            return this.data[id];
        }
    }

    /**
     * Look up the given value and return the key for it.
     * @param value  A value to find in the list
     * @param offset From what element we start seraching, defaults to 0
     *               which is the beginning of the list. If you set this to -1, then
     *               the offset will be set to after the previous position when this function
     *               was run and found a match.
     * @return If value was not found, then "-1" is returned.
     */
    public getKey(value:string, offset:number=0):string {
        if (offset===-1) {
            offset = this.lastFoundValueId+1;
        }
        let id = this.data.indexOf(value, offset);
        if (id===-1) {
            return "-1";
        }
        else {
            this.lastFoundValueId = id;
            return this.keys[id];
        }
    }

    /**
     * Delete an element from the list
     * @param key The key that identifies the element
     * @return
     */
    public delete(key:string):boolean {
        if (this.has(key)) {
            let id = this.keys.indexOf(key);
            this.keys.splice(id, 1);
            this.data.splice(id, 1);
            return true;
        }
        return false;
    }

    /**
     * Check if value with given key exists
     * @param key
     * @return boolean
     */
    public has(key:string):boolean {
        let id = this.keys.indexOf(key);
        return id !== -1; // if not -1, then true
    }

    /**
     * The number of elements in the list
     */
    public length():number {
        return this.data.length;
    }

    /**
     * Delete all data in the list (empty)
     */
    public reset() {
        this.keys = [];
        this.data = [];
        this.lastIndex = 0;
    }

    /**
     * Is the list empty?
     */
    public isEmpty():boolean {
        return this.data.length===0;
    }

}

export const MappedList = MList;