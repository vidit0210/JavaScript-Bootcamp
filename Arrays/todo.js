const ToDo = ['JavaScript', 'Bitcoin', 'Ethereum']
console.log(`You have todo ${ToDo.length} things `)
console.log(ToDo)
ToDo.splice(2, 1) //1 means delete that item
ToDo.push('Smart Contracts')
ToDo.shift()
console.log(ToDo)
ToDo.forEach((item, index) => { // Will be called number of items time in the array
    const num = index + 1
    console.log(`${num} . ${item}`)
})
console.log('--------------------------------------------------');

for (let item = 0; item < ToDo.length; item++) {
    let num = item + 1
    console.log(`${num} . ${ToDo[item]}`)
}

//Get The Number Index of the Item
const object_todo = [{
    text: 'Bitcoin Book',
    commpleted: false
}, {
    text: 'Ethereum Book',
    commpleted: false
}, {
    text: 'DeepLearning Book',
    commpleted: true
}]

let delteToDo = (object, stuff) => {
    let index = object.findIndex((todo) => {
        return todo.text.toLowerCase() === stuff.toLowerCase()
    })
    return object.splice(index, 1)
}
let index = delteToDo(object_todo, 'bitcoin book')
console.log(object_todo)