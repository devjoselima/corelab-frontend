import { useContext, useState } from 'react'
import { toast } from 'sonner'

import TaskContext from '../../context/TaskContext'

import { FaRegStar, FaStar } from 'react-icons/fa'
import { RiPaintFill } from 'react-icons/ri'
import { IoIosAdd } from 'react-icons/io'

export const TaskInput = () => {
    const { createTask } = useContext(TaskContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')

    const [isFavorited, setIsFavorited] = useState(false)

    const handleAddTask = async (
        title: string,
        description: string,
        isFavorited: boolean
    ) => {
        if (description.length < 1 || title.length < 1) {
            toast.error('Preencha todos os campos!')
        } else {
            const color = 'blue'
            console.log(isFavorited)
            await createTask(title, description, color, isFavorited)
            toast.success('Tarefa criada com sucesso!')
        }
    }

    const handleFavoriteTask = () => {
        setIsFavorited((prevState) => !prevState)
    }
    return (
        <div className="md:w-[500px] bg-white mt-4 mb-10 w-80 mx-auto rounded-2xl">
            <div className="flex items-center py-5 px-4 justify-between border-b-2 border-b-gray100 w-full">
                <input
                    type="text"
                    placeholder="Digite aqui o titulo da tarefa"
                    className="outline-none"
                    onChange={(e) => setTaskTitle(e.target.value)}
                />
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
                className="px-4 py-5 outline-none bg-transparent text-sm block"
                onChange={(e) => setTaskDescription(e.target.value)}
                required
            />

            <div className="flex w-full justify-between p-2">
                <RiPaintFill
                    size={22}
                    className="text-orange400 cursor-pointer"
                />

                <button
                    className="bg-[#2ecc71] hover:bg-[#27ae60] text-white font-bold  text-sm rounded-full transition duration-300"
                    onClick={() =>
                        handleAddTask(taskTitle, taskDescription, isFavorited)
                    }
                >
                    <IoIosAdd size={30} />
                </button>
            </div>
        </div>
    )
}
