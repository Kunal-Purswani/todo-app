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
        <div className='h-[80%] z-0 mt-8 flex justify-center'>
            <div className='w-full mx-3 sm:w-[80%] sm:mx-0'>
                {
                    arr
                }
            </div>
        </div>
    )
}

export default Todos
