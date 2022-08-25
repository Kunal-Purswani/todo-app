import React, { useEffect, useState } from 'react'
import Todo from './Todo';
import { onSnapshot, query, collection, orderBy } from 'firebase/firestore'
import { db } from '../firebase'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

function Todos() {
    const [todos, setTodos] = useState([]);
    const { data: session } = useSession()
    const router = useRouter()
    useEffect(
        () => {
            onSnapshot(
                query(collection(db, 'users'), orderBy('timestamp', 'desc')), (snapshot) => {
                    setTodos(snapshot.docs)
                }
            )
        }
        ,
        [db])
    const arr = []
    todos.map((todo) => {
        if (todo.data().uid == session?.user?.uid) {
            arr.push(<Todo
                key={todo.id}
                id={todo.id}
                task={todo.data().task}
                isDone={todo.data().isDone}
            />)
        }
    })
    return (
        <div className='h-[70%] z-0 mt-8 flex justify-center '>
            <div className='w-full mx-3 px-3 sm:w-[90%] sm:mx-0 lg:w-[85%] overflow-auto scrollbar-none sm:scrollbar-thumb-rounded sm:scrollbar-thumb-teal-100 sm:scrollbar-track-slate-200 sm:scrollbar-thin'>
                {
                    arr
                }
            </div>
        </div>
    )
}

export default Todos
