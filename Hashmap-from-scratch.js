class HashMap {
    constructor(size = 10) { // default
        // number of buckets - more means less collision
        this.size = size;
        // Each bucket = array holding key, value pairs 
        // Need separate buckets to handle collisions
        this.buckets = [];
        for (let i = 0; i < size; i++) {
            this.buckets.push([])
        }
        // Initiatlise empty arrays for buckets
    }

    // Hash function
    hash(key) {
        let hash = 0;

        // Loop through key and convert to index (explain)
        for (let i = 0; i < key.length; i++) {
            // Returns ASCII no of chara
            hash += key.charCodeAt(i);
        }

        // Make no. smaller for bucket
        return hash % this.size; // E.g. 530 % 16 = 2
    }

    // Adding key value pairs if they don't already exist 
    // If 2 diff keys are hashed to same index, they're added
    // If the same key is hashed to same index, it's value is updated
    set(key, value) {
        // Assigns bucket corresponding to hashed key
        const index = this.hash(key);
        const bucket = this.buckets[index];

        let found = false;

        // Check if key already exists
        for (let pair of bucket) {
            if (pair[0] === key) {
                pair[1] = value;
                found = true;
                break;
            }
        }

        // Add new pair if not found
        if (!found) {
            bucket.push([key, value]);
        }
    }

    get(key) {
        const index = this.hash(key); // Hash key to find bucket index
        const bucket = this.buckets[index]; // Get bucket

        // Return value if key exists
        for (let pair of bucket) {
            if (pair[0] === key) {
                return pair[1]
            }
        }

        return undefined; // key not found
    }
}

const map = new HashMap(5);

// Add values
map.set("apple", 10);
map.set("banana", 20);
map.set("orange", 30);

console.log(map.get("apple"));  
console.log(map.get("banana"));  
console.log(map.get("orange"));  
console.log(map.get("grape"));   // undefined (not found)

// Update existing key
map.set("apple", 100);
console.log(map.get("apple"));

// Collision test
map.set("kiwi", 40);
map.set("mango", 50);
console.log(map.get("kiwi"));
console.log(map.get("mango"));  