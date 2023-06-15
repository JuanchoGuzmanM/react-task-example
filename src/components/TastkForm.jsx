import React, {useContext, useState} from 'react'
import {TaskContext} from '../context/TaskContext'

export default function TastkForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const {createTask} = useContext(TaskContext)

        const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, description)
        createTask({
            title,
            description
        });
        setTitle('')
        setDescription('')
    };
    return (
        <div className='max-w-md mx-auto'>
            <form className='bg-gray-500 p-10 mb-4' onSubmit={handleSubmit}>
                <h2 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h2>
                <input placeholder='Escribe tu tarea'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className='bg-slate-100 p-3 w-full mb-2'
                    autoFocus />
                <textarea placeholder='Escribe la descripcion'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className='bg-slate-100 p-3 w-full mb-2'>
                    
                    </textarea>
                <button
                    className='bg-orange-400 px-3 py-1 text-white'
                >Guardar</button>
            </form>
        </div>
    )
}
