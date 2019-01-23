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