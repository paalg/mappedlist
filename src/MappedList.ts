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
 * @version 0.1.1
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
            // add value to list and get the id it got
            this.data.push(value);
            let id = this.data.length - 1; // always length - 1

            // add key to key list with same ID
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
     * Check if value with given key exists
     * @param key
     * @return boolean
     */
    public has(key:string):boolean {
        let id = this.keys.indexOf(key);
        return id !== -1; // if not -1, then true
    }

}

export const MappedList = MList;