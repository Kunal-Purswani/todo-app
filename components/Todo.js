import React from 'react'
import { CheckIcon, PencilIcon } from '@heroicons/react/outline'
import { TrashIcon } from '@heroicons/react/solid'
import { updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase'

export const Name = React.createContext();

function Todo({ id, task, isDone }) {
    const checked = async () => {
        const todoRef = doc(db, 'users', id)
        await updateDoc(todoRef, {
            isDone: !isDone,
        })
    }
    const deleted = async () => {
        const todoRef = doc(db, 'users', id)
        await deleteDoc(todoRef)
    }
    return (
        <div className='flex items-center my-2 sm:px-2 pb-3 border-b border-b-teal-200 text-gray-700'>
            <div className={'flex-1 sm:text-lg md:text-2xl'}>
                <p className={'' + (isDone ? 'line-through' : '')}>{task}</p>
            </div>
            <div className='flex justify-around items-center w-20 '>
                <CheckIcon onClick={checked} className={isDone ? 'bg-gray-700 text-gray-50 rounded-md h-8 w-8 cursor-pointer p-1 transition-all duration-200 ease-out' : 'h-8 w-8 cursor-pointer p-1'}></CheckIcon>
                <TrashIcon onClick={deleted} className='h-8 w-8 cursor-pointer p-1'></TrashIcon>
            </div>
            <hr />
        </div>
    )
}

export default Todo
