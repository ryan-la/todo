import React from "react"

function TodoItem({ text, item, handleChange }) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={item.completed}
                // receives original item.id in App.js, passing in parameter
                onChange={() => handleChange(item.id)}
            />
            {/* If item.completed is equal to true, use the completedStyle */}
            <p style={item.completed === true ? completedStyle : null}>{text}</p>
        </div>
    )
}

export default TodoItem