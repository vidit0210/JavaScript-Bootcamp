{/*
// console.log(notes[1])
// notes.push('note3');
// console.log(notes)

// let x =notes.pop()
// console.log(x)
// console.log(notes)
// notes.shift() //Removes first Item from The array
// notes.splice(2,0,'Adding new Note')
// console.log(notes)
// notes.splice(2,1)
// console.log(notes)
// notes.forEach((note,index) => {
//     console.log(index)
//     console.log(note)
// });
// x=notes.indexOf('note9')
// console.log(x) */}
let x =[1,2,3,4,5,6]
let notes =[
    {
        title:'Study German',
        body:' Learn German everyday from german with Jenny'
    },
    {
        title:'Improve Programming Skills',
        body:'Can Improcve Porgramming Skills from HackerEarth'
    },
    {
        title:'Complete Front End  Developer NanoDegree',
        body:' Learn front ENd Developer NanoDegree From'
    }
]
// let index = notes.findIndex(note => {return note.title ==="Study German"})
// console.log(index)

// let findNote  = function(notes,noteTitle){
//     const index  = notes.findIndex(note =>{return note.title.toLowerCase() === noteTitle.toLowerCase()})
//     return notes[index]
// }

let findNote  = function(notes,noteTitle){
    const note  = notes.find(note =>{return note.title.toLowerCase() === noteTitle.toLowerCase()})
    return note
}
let serachNote = (notes,noteTitle)=>{
    return notes.filter(note => {note.title.toLowerCase()=== noteTitle.toLowerCase()})
}
let result = findNote(notes,'Study German')
console.log(result)

