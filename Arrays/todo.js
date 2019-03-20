// {const todos = ['German','JavaScript','CSS','HackerEarth','HackeRank']
// console.log(`You have ${todos.length} todo `)
// todos.forEach((todo,index)=>{
//     console.log(`${index+1} - ${todo}`)
// })}

const todos =[{
    text:'German',
    completed:false
},{
    text:'JavaScript',
    completed:true
},{
    text:'CSS',
    completed:false
}]

const sortToDo  =(todos)=>{
    todos.sort((a,b)=>{
        if( !a.completed && b.completed  ){
            return -1
        }else if(!b.completed && a.completed){
            return 1;
        }else{
        return 0;
        }
    })
}
const deleteToDo = (todos,text)=>{
    let index = todos.findIndex( todo => {todo.text.toLowerCase()===text.toLowerCase()})
    if(index>-1){
    todos.splice(index,1)
    }

}
// deleteToDo(todos,'CSSs')
let completed = todos.filter(todo => {
    return !(todo.completed)
})
sortToDo(todos);
console.log(todos)