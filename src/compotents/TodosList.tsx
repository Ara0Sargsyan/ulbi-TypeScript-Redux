import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";

const TodoList: FC = () => {
    const {loading, todos, error, limit, page} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])


    if (loading) {
        return <h1>...Loading</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}> {todo.id} - {todo.title} </div>
            ))}
            <div style={{display: "flex"}}>
                {pages.map(p => (
                    <div
                        onClick={() => {setTodoPage(p)}}
                        key={p}
                        style={{
                            border: p === page ? "1px solid green" : "1px solid gray",
                            padding: "10px",
                            marginTop: "15px"
                        }}
                    >
                        {p}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;