# Contact-Lookup-System

## Find Or Add Algorithm

Aim: search for a contact in a contact list:
 if we find the contact, return it
 if we can't find the contact, add it to the list

Input: single contact (consisting of name and number)
Output: the contact, and whether they were added (added: true) or found (added: false)

#### Steps:
Initialise hashmap: to store contacts and be used for lookup/adding contacts (using Map function)
Normalise input: number treated as string in order to normalise (trim whitespace) to correctly identify contact
Set key: as number (more likely to be unique than name)
Find contact: if the contact exists in the hashmap, return the contact with added: false
Create contact: if find contact fails, create contact using input, add to hashmap and return contact with added:true

### Big O Notation
- All operations O(1) e.g. has, get set using hash table 
- Lookup finds element using unique identifier so doesn't have to loop through 

## Detect Duplicates Algorithm

Aim: look for and return duplicated contacts within a list of contacts
Input: a list of contacts (name and number)
Output: total number of duplicates, and list of duplicated records e

#### Steps:
Storing the contacts: create empty hash map (frequency) to store the contacts 
Storing the return value: create empty list (duplicates) to add any duplicate contacts, so they can be stored when found and returned at the end of the function
Using number as the key: the number should be used as the key as it's the value most likely to be unique
Counting duplicates: for every contact in the contact list, add the contact number as the key ([number]), if that contact number already exists, add 1 to the value (++), if it doesn't exist already, set the counter value to one 
Adding duplicates to array: after building the frequency map, iterate over the keys in the frequency map, if the counter is above 1 (there is more than one contact with the same key), add it to the duplicates array 
Returning values: return the number of duplicates in the contact list as well as the contacts

### Big O Notation
- Counter O(n) goes through each contact once
- Frequency lookup O(1)
