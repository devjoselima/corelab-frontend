import { useContext } from 'react'
import ColorContext from '../../context/ColorContext'

import { colors } from '../../utils/colors'
import TaskContext from '../../context/TaskContext'
import { toast } from 'sonner'

interface ColorPickerProps {
    taskId: string
    closeMenu: () => void
}

export const ColorPicker = ({ taskId, closeMenu }: ColorPickerProps) => {
    const { editTask } = useContext(TaskContext)
    const { updateColor } = useContext(ColorContext)

    const editColor = async (taskId: string, newColor: string) => {
        try {
            updateColor(newColor)
            await editTask(taskId, { color: newColor })
            toast.success('Cor alterada!')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="absolute bg-white p-2 rounded-md border border-gray100 shadow-md z-10 top-0 left-0 mt-8 grid grid-cols-6 gap-2 w-48 ">
            {colors.map((currentColor, index) => (
                <div
                    key={index}
                    className="w-6 h-6 rounded-full cursor-pointer"
                    style={{ backgroundColor: currentColor }}
                    onClick={() => {
                        editColor(taskId, currentColor)
                        closeMenu()
                    }}
                />
            ))}
        </div>
    )
}
