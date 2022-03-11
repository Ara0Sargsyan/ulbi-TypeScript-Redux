import React from 'react';
import UserList from "./compotents/UserList";
import TodoList from "./compotents/TodosList";

function App() {
    return (
        <div style={{display: "flex", justifyContent: "space-around"}} >
            <UserList/>
            <TodoList/>
        </div>
    );
}

export default App;
