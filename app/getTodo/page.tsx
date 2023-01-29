import TodoCheck from "./todoCheck";

type todos = {
    id: string,
    name: string,
    isDone: boolean
}

const getTodos = async () => {
    let todos = await fetch('http://localhost:3001/api/todo/list');
    return todos.json();
}

export default async function GetTodo() {
    const {todos}  = await getTodos();
    console.log(todos);
    return(
        <div>
            <h2>ToDo&rsquo;s</h2>
            <ul style={{listStyleType: 'none', paddingLeft: '20px'}}>
                {todos.map((t:todos) => {
                    return (
                        <li key={t.id} style={{margin:'10px', fontSize:'16px'}}>
                            <TodoCheck {...t}/>
                        </li>
                    )
                }) }
            </ul>
        </div>
    );
}