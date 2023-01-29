'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';

async function create(name: string, refresh: () => void) {
    await fetch('', {
        method: 'POST',
        body: JSON.stringify({name})
    })
    refresh();
}

export default function CreateTodo() {
    const router = useRouter();
    let [name, setName] = useState('');
    return (
        <div>
            <h2>Create Todo</h2>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
            <button
                style={{marginLeft: '30px'}}
                onClick={ async () => {
                    await create(name, router.refresh);
                    setName("");}}
            >
            Create New Todo
            </button>
        </div>
    );
}