// function myTodo(todo : {title: string, text: string}) {
//     console.log(todo.title+' : '+ todo.text)
// }

// let todo = { title: 'Work' , text: 'to do that'}
// myTodo(todo)

// now make it simple using interfaces


interface Todo{
title: string, text: string
}

function myTodo(todo : Todo) {
    console.log(todo.title+' : '+ todo.text)
}

let todo = { title: 'Work' , text: 'to do that'}
myTodo(todo)
