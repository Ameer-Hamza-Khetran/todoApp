'use client'

import { useRouter } from "next/navigation";

type todos = {
    id: string,
    name: string,
    isDone: boolean
}

async function update(id:string, isDone: boolean, refresh:() => void) {
    await fetch('/api/todo/update',
    {
        method: 'POST',
        body: JSON.stringify({
            id, isDone
        })
    }
    )
    refresh();
}

async function deleteTodo(id:string, refresh: () => void) {
    await fetch(`/api/todo/delete?id=${id}`,
    {
        method:'DELETE',
    }
    )
    refresh();
}


export default function TodoCheck(todo:todos) {
    const router = useRouter();
    return(
        <>
        <input type="checkbox" onChange={(e) => update(todo.id, e.target.checked, router.refresh)} checked={todo.isDone}></input>
        <span>{todo.name}</span>
        <button style={{marginLeft: '10px'}}
        onClick={() => deleteTodo(todo.id, router.refresh)}
        >
        Delete
        </button>
        </>
    );
}