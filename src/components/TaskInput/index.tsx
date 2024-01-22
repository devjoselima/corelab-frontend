import { useContext, useState } from 'react'
import ColorContext from '../../context/ColorContext'
import { toast } from 'sonner'

import TaskContext from '../../context/TaskContext'

import { FaRegStar, FaStar } from 'react-icons/fa'
import { RiPaintFill } from 'react-icons/ri'
import { IoIosAdd } from 'react-icons/io'
import { ColorPicker } from '../ColorPicker'

export const TaskInput = () => {
    const { createTask } = useContext(TaskContext)
    const { selectedColor } = useContext(ColorContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [isColorPickerOpen, setIsColorPickerOpen] = useState(false)

    const [isFavorited, setIsFavorited] = useState(false)

    const handleAddTask = async (
        title: string,
        description: string,
        color: string,
        isFavorited: boolean
    ) => {
        if (description.length < 1 || title.length < 1) {
            toast.error('Preencha todos os campos!')
        } else {
            await createTask(title, description, color, isFavorited)

            toast.success('Tarefa criada com sucesso!')
        }
    }

    const handleFavoriteTask = () => {
        setIsFavorited((prevState) => !prevState)
    }

    const handleColorPickerToggle = () => {
        setIsColorPickerOpen(!isColorPickerOpen)
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
                className="px-4 py-5 w-full outline-none bg-transparent text-sm block"
                onChange={(e) => setTaskDescription(e.target.value)}
                required
            />

            <div className="flex w-full justify-between p-2">
                <div className="relative">
                    <RiPaintFill
                        size={22}
                        className="text-orange400 cursor-pointer"
                        onClick={handleColorPickerToggle}
                    />
                    {isColorPickerOpen && (
                        <ColorPicker
                            taskId="3f445a9f-25e4-456c-a793-9c29e830eee0"
                            closeMenu={handleColorPickerToggle}
                        />
                    )}
                </div>

                <button
                    className="bg-[#2ecc71] hover:bg-[#27ae60] text-white font-bold  text-sm rounded-full transition duration-300"
                    onClick={() =>
                        handleAddTask(
                            taskTitle,
                            taskDescription,
                            selectedColor,
                            isFavorited
                        )
                    }
                >
                    <IoIosAdd size={30} />
                </button>
            </div>
        </div>
    )
}
