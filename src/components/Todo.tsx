import { Todo as TodoType } from "./Todos.type"

type TodoProps = {
    todo: TodoType,
    deleteTodo: (id: string) => void,
    toggleCompleted: (id: string) => void
}

function Todo({ todo, deleteTodo, toggleCompleted }: TodoProps) {
    return (
        <div className="Todo">
            <p
                className={`${todo.completed ? "completed" : ""}`}
            >
                {todo.title}
            </p>
            <div>{/* <FontAwesomeIcon icon={faTrash} /> */}</div>
        </div>
    )
}

export default Todo