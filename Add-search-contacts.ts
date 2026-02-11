export type Contact = { name: string, number: string };

const contacts = new Map<string, Contact>();

function findOrAddContact(contactName: string, contactNumber: string): { contact: Contact; added: boolean } {
    const key = contactNumber.trim();

    // Check if contact exists
    if (contacts.has(key)) {
        return {
            contact: contacts.get(key)!,
            added: false
        };
    }

    // If it doesn't, create new contact
    const newContact: Contact = {
        name: contactName, 
        number: contactNumber
    }

    // Add new contact to hashmap
    contacts.set(key, newContact);

    return {
        contact: newContact, 
        added: true
    }
}

console.log(findOrAddContact("Alice", "123"));
console.log(findOrAddContact("Sophie", "56549"));
console.log(findOrAddContact("Alice", "123"));
