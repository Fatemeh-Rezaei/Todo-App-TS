import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Todo as TodoType } from "./Todos.type"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

type TodoProps = {
    todo: TodoType,
    deleteTodo: (id: string) => boolean,
    toggleCompleted: (id: string) => boolean
}

function Todo({ todo, deleteTodo, toggleCompleted }: TodoProps) {
    return (
        <div className="Todo">
            <p onClick={() => toggleCompleted(todo.id)}
                className={`${todo.completed ? "completed" : ""}`}
            >
                {todo.title}
            </p>
            <div>
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />
            </div>
        </div>
    )
}

export default Todo