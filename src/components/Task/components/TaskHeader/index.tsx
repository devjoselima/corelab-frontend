import { useContext, useState } from 'react'
import { toast } from 'sonner'

import TaskContext from '../../../../context/TaskContext'

import { FaRegStar, FaStar } from 'react-icons/fa'

interface TaskHeaderProps {
    taskId: string
    title: string
}

export const TaskHeader = ({ taskId, title }: TaskHeaderProps) => {
    const { tasks, editTask } = useContext(TaskContext)

    const task = tasks.find((t) => t.id === taskId)

    const [isFavorited, setIsFavorited] = useState(task?.isFavorited)

    const showToast = () => {
        if (isFavorited) {
            toast.warning('Tarefa desfavoritada!')
        } else {
            toast.success('Tarefa favoritada!')
        }
    }

    const handleFavoriteTask = async () => {
        await editTask(taskId, { isFavorited: !isFavorited })
        setIsFavorited((prevIsFavorited) => !prevIsFavorited)

        showToast()
    }
    return (
        <div className="flex items-center py-3 px-4 justify-between border-b-2 border-b-gray100 w-full">
            <h1 className="font-bold text-gray700">{title}</h1>
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
    )
}
