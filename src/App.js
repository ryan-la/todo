import React from 'react';
import TodoItem from './components/TodoItem.js';
import todosData from './todosData.js'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            // todosData is in the variable todos
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    //when checkbox is clicked, it makes change to state and updates item 
    //pass handleChange function to TodoItem
    //RUN THIS FUNCITON EVERYTIME ONCHANGE OCCURS IN TODOITEM.js
    handleChange(id) {
        this.setState((prevState) => {
            //maps through each object of the array, and look for id that matches
            //prevState is old version of todos
            const updateTodos = prevState.todos.map(todo => {
                //if the todo.id (old version) is equal to the id when clicked
                if (todo.id === id) {
                    //return brand new object to the array if id equals
                    return {
                        //prevState and todo are same objects so have to use spread operator return brand new object
                        ...todo,
                        completed: !todo.completed //manually override the completed property
                    }
                }
                //return original object if doesnt equal
                return todo;
            })

            console.log(prevState.todos) //completed: true
            console.log(updateTodos) //completed false

            return {
                todos: updateTodos
            }
        })
    }

    render() {
        //item is the first object in array, then second, then third
        const todoItems = this.state.todos.map((item) => {
            return (
                //item equals the whole object
                <TodoItem key={item.id} item={item} text={item.text} handleChange={this.handleChange} />
            )
        })

        return (
            <div className="todo-list">
                <h1>List of things to do!</h1>
                {todoItems}
            </div>
        )

    }
}

export default App;