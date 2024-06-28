import { useState } from 'react'
import swal from 'sweetalert';

import Todo from './Todo'
import TodoForm from './TodoForm'
import { Todo as TodoType } from './Todos.type'

function TodosWrapper() {
    const [todos, setTodos] = useState<TodoType[]>([]);

    const addTodo = (title: string) => {
        setTodos([
            ...todos,
            {
                id: crypto.randomUUID(),
                title,
                completed: false
            }
        ])

        return true;
    }

    const deleteTodo = (id: string) => {
        swal({
            title: "آیا از حذف تودو اطمینان دارید؟",
            icon: "warning",
            buttons: ["نه", "آره"],
        }).then(result => {
            if (result) {
                setTodos(todos.filter(todo => todo.id !== id))

                swal({
                    title: "تودوی مورد نظر با موفقیت حذف شد",
                    icon: "success"
                })
            }
        })
        return true;
    }

    const toggleCompleted = (id: string) => { }

    return (
        <div className="TodoWrapper">
            <h1>Todo List ❤️ </h1>
            {/* Add New Todo Form */}

            <TodoForm addTodo={addTodo} />

            {/* display todos */}
            {
                todos.map(todo => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} />)
            }
        </div>
    )
}

export default TodosWrapper