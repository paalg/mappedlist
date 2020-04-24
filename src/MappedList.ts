/**
 * A mapped list
 *
 * This implementation is using one array for data and one array for keys. The ID of the
 * keys are the same as the ID for the corresponding value. Only strings are allowed
 * for keys and values in this version.
 *
 * This is the first version that is not optimized. Currently this code is used for
 * small data sets.
 *
 * @author Pål Gjerde Gammelsæter
 * @link https://github.com/paalg/mappedlist
 * @version 0.1.0
 * @beta
 */
class MList {

    /** Internal array of the values */
    private data:string[] = [];

    /** Internal array of keys */
    private keys:string[] = [];


    /**
     * Add element to the list
     * @param key
     * @param value
     */
    public add(key:string, value:string) {
        // add value to list and get the id it got
        this.data.push(value);
        let id = this.data.length-1; // always length - 1

        // add key to other list with reference
        this.keys[id] = key;
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
        return id !== -1; // if not -1, then true, else false
    }

}

export const MappedList = MList;