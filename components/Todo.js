import React from 'react'
import { CheckIcon, PencilIcon } from '@heroicons/react/outline'
import { TrashIcon } from '@heroicons/react/solid'
import { updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase'
import Input from './Input';

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
        <div className='flex items-center'>
            <div className={'flex-1 sm:text-lg md:text-2xl'}>
                <p className={'' + (isDone ? 'line-through' : '')}>{task}</p>
            </div>
            <div className='flex justify-around items-center w-20 mb-1'>
                <CheckIcon onClick={checked} className='h-8 w-8 cursor-pointer p-1'></CheckIcon>
                <TrashIcon onClick={deleted} className='h-8 w-8 cursor-pointer p-1'></TrashIcon>
            </div>
        </div>
    )
}

export default Todo
