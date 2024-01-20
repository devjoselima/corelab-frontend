import { useContext, useState } from 'react'
import { toast } from 'sonner'

import TaskContext from '../../context/TaskContext'

import { FaRegStar, FaStar } from 'react-icons/fa'

export const TaskInput = () => {
    const { createTask } = useContext(TaskContext)
    const [taskDescription, setTaskDescription] = useState('')
    const [isFavorited, setIsFavorited] = useState(false)

    const handleAddTask = async (description: string) => {
        if (description.length < 1) {
            console.log('Esse campo nao pode ficar vazio')
            toast.error('Preencha o campo!')
        } else {
            const title = 'Teste'
            const color = 'blue'
            const isFavorited = false
            await createTask(title, description, color, isFavorited)
            toast.success('Tarefa criada com sucesso!')
        }
    }

    const handleFavoriteTask = () => {
        setIsFavorited((prevState) => !prevState)
    }
    return (
        <div className="md:w-[500px] bg-white mt-4 mb-5 w-80 mx-auto rounded-2xl">
            <div className="flex items-center py-3 px-4 justify-between border-b-2 border-b-gray100 w-full">
                <h1 className="font-bold text-gray700">Título</h1>
                {isFavorited ? (
                    <FaStar
                        size={20}
                        fill="#FFA000"
                        className="cursor-pointer"
                        onClick={handleFavoriteTask}
                    />
                ) : (
                    <FaRegStar
                        size={20}
                        className="text-gray400 cursor-pointer"
                        onClick={handleFavoriteTask}
                    />
                )}
            </div>
            <input
                type="text "
                placeholder="Criar nota..."
                className="px-4 py-5 outline-none bg-transparent text-sm"
                onChange={(e) => setTaskDescription(e.target.value)}
                required
            />
            <button
                className="bg-success"
                onClick={() => handleAddTask(taskDescription)}
            >
                Adicionar tarefa
            </button>
        </div>
    )
}
