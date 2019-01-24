const notes = ['Note 1', 'Note 2', 'Note 3']
const objectsNotes = [{
    title: 'Note1',
    body: 'Heading Spain'
}, {
    'title': 'Habbits to Work on',
    body: 'Excercise'
}, {
    'title': 'office Modification',
    'body': 'Get New Seat'
}]
//lENGTH is property not a function...
console.log(notes.length)
console.log(notes)
//Add Something on the End...
notes.push('Note 4', 'Note 5')
//Remove Something from the end..
notes.pop()
//Shift - removes First Item from the Array
notes.shift()
//Unshift -Add someyhing in the begining
notes.unshift('First Item')
//Middle of the Array 
notes.splice(1, 1, 'This is The New Second item') // removes the Item at Second index and replaces
notes.splice(0, 0, "new First item")
console.log(notes)
console.log('--------------------------------------------------');
notes.forEach((item) => {
    console.log(item);
})
// normal For Loop
console.log('--------------------------------------------------');

for (let count = 0; count <= 2; count++) {
    console.log(count)
}
console.log('--------------------------------------------------');

for (let count = 2; count >= 0; count--) {
    console.log(count)
}
console.log('--------------------------------------------------');
console.log('--------------------------------------------------');
for (let count = 0; count < notes.length; count++) {
    console.log(notes[count])
}
for (let count = notes.length; count >= 0; count--) {
    console.log(notes[count])
}
console.log('--------------------------------------------------');
console.log(notes.indexOf('Note 4'))

console.log('--------------------------------------------------');
//Working on Object
console.log(notes.indexOf({}))
//To work with Obejcts use findindex
const index = objectsNotes.findIndex((note, index) => {
    console.log(note)
    return note.title === 'Habbits to Work on'

})
console.log(index)
console.log('--------------------------------------------------');

const findNote = (notes, noteTitle) => {
    const index = notes.findIndex((note) => {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
}
const findNoteV2 = (notes, noteTitle) => { //find - returns the value instead of index
    const note = notes.find((note) => {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return note;
}
const find_note = findNote(objectsNotes, 'Habbits to Work on')
console.log(find_note)
const find_notev2 = findNoteV2(objectsNotes, 'Habbits to Work on')
console.log(find_notev2)
console.log('--------------------------------------------------');

//Filtering
//Creates a new Filtered Array on the the condition providecs
const filterNote = (toFilter, query) => {
    let result = toFilter.filter((item, index) => {
        let isTitleMatch = item.title.toLowerCase().includes(query)
        let isBodyMatch = item.body.toLowerCase().includes(query)
        return isTitleMatch || isBodyMatch
    })
    return result
}
const filetArrayNotes = (_Array, query) => {
    let result = _Array.filter((item, index) => {
        return item.includes('3')
    })
    return result
}
console.log(filterNote(objectsNotes, 'office'))
console.log(filetArrayNotes(notes, '3'))