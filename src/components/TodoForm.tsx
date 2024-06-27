import { useState } from "react"

type TodoFormProps = {
    addTodo: (title: string) => boolean
}

function TodoForm({ addTodo }: TodoFormProps) {
    const [value, setValue] = useState<string>('')

    const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (value) {
            addTodo(value)
            setValue("")
        }
    }

    return (
        <form className="TodoForm" onSubmit={handelSubmit}>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                className="todo-input"
                placeholder="What is the task today?"
            />
            <button type="submit" className="todo-btn">
                Add Task
            </button>
        </form>
    )
}

export default TodoForm