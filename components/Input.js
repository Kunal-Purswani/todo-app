import React from 'react'
import { useState } from 'react'
import { PlusSmIcon } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase'

function Input() {
    const { data: session } = useSession()
    const [todo, setTodo] = useState('')
    const changeValue = (e) => {
        setTodo(e.target.value)
    }
    const enterPressed = (e) => {
        if (e.key === "Enter") {
            addTodo()
        }
    }
    const addTodo = async () => {
        if (todo.trim().length) {
            await addDoc(collection(db, 'users'), {
                uid: session.user.uid,
                task: todo,
                isDone: false,
                timestamp: serverTimestamp()
            })
            setTodo('')
        }
    }
    return (
        <div className="w-full mt-8 z-10 flex justify-center">
            <div className="relative mt-1 p-3 flex justify-center items-center rounded-md">
                <input value={todo} onChange={changeValue} onKeyPress={enterPressed} type="text" className="bg-teal-100 block w-56 sm:w-96 p-2 sm:text-xl text-teal-500 rounded-md border-teal-200 focus:ring-teal-400 focus:border-teal-400" placeholder="Enter your todo..." />
                <PlusSmIcon onClick={addTodo} title="Add todo" className='ml-2 rounded hover:bg-teal-400 hover:text-teal-50 hover:scale-125 cursor-pointer transition-all duration-150 ease-out h-9 w-8 text-teal-400'></PlusSmIcon>
            </div>
        </div>
    )
}

export default Input
