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
 * @version 0.1.2
 * @beta
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
     * Add element to the list
     * @param key
     * @param value
     * @throws Error If you try to used a key that is already used
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

}

export const MappedList = MList;