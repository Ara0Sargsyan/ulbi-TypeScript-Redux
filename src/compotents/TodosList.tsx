import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";

const TodoList: FC = () => {
    const {loading, todos, error, limit, page} = useTypedSelector(state => state.todo)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    /// haselenq useActioni popoxutyany

    if (loading) {
        return <h1>...Loading</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id} > {todo.title} </div>
            ))}
        </div>
    );
};

export default TodoList;