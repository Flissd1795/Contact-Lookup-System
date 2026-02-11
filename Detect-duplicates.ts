import type { Contact } from "./Add-search-contacts";

function detectDuplicates(contacts: Contact[]): { numberOfDuplicates: number, duplicateContacts: string[] } {
    const frequency: Record<string, number> = {};
    let duplicates: string[] = [];

    for (let contact of contacts) {
        let number = contact.number 

        // If the num exists, increment, else set to 1
        if (frequency[number]) {
            frequency[number]++;
        } else {
            frequency[number] = 1;
        }
    }
        
        // If its a duplicate, add to the duplicate array 
        for (let number in frequency) {
            if ((frequency[number] ?? 0)> 1) {
                duplicates.push(number)
            }
        }
        return { numberOfDuplicates: duplicates.length,
                duplicateContacts: duplicates }
}

console.log(detectDuplicates([
    { name: "Alice", number: "123" },
    { name: "Sophie", number: "123" },
    { name: "Sophie", number: "12345" },
    { name: "Tom", number: "576" }
]));



