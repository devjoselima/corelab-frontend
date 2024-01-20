import { useContext, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { RiPaintFill } from 'react-icons/ri'
import { TfiPencil } from 'react-icons/tfi'
import TaskContext from '../../../../context/TaskContext'

interface TaskBodyProps {
    taskId: string
    description: string
}

export const TaskBody = ({ taskId, description }: TaskBodyProps) => {
    const { editTask } = useContext(TaskContext)

    const [isEditing, setIsEditing] = useState(false)
    const [editedDescription, setEditedDescription] = useState(description)
    const [originalDescription] = useState(description)

    const handleEditDescription = async () => {
        try {
            setIsEditing(true)
            await editTask(taskId, { description: editedDescription })

            setIsEditing(false)
        } catch (error) {
            console.error('Error editing task description:', error)
        }
    }

    const handleCancelEdit = async () => {
        setEditedDescription(originalDescription)
        setIsEditing(false)
    }

    return (
        <>
            <textarea
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                className="h-[70%]  w-full resize-none outline-none p-3 text-gray700"
                placeholder="Clique ou arraste o arquivo para esta área para fazer upload"
                disabled={!isEditing}
                onClick={() => setIsEditing(true)}
            />

            {isEditing && (
                <div className="flex gap-4 px-3">
                    <button
                        onClick={handleCancelEdit}
                        className="cursor-pointer bg-red500 py-1 px-3 text-sm rounded-md text-white"
                    >
                        cancelar
                    </button>
                    <button
                        onClick={handleEditDescription}
                        className="cursor-pointer bg-success py-1 px-3 text-sm rounded-md text-white"
                    >
                        salvar
                    </button>
                </div>
            )}

            <div className="flex p-4 justify-between">
                <div className="flex gap-3">
                    <TfiPencil
                        size={20}
                        className="cursor-pointer"
                        onClick={() => setIsEditing(true)}
                    />
                    <RiPaintFill
                        size={20}
                        className="text-orange400 cursor-pointer"
                    />
                </div>
                <IoMdClose size={24} className="text-gray800 cursor-pointer" />
            </div>
        </>
    )
}
