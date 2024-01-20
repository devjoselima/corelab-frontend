import { useContext } from 'react'
import ColorContext from '../../context/ColorContext'

import { colors } from '../../utils/colors'

interface ColorPickerProps {
    onSelectColor: () => void
}

export const ColorPicker = ({ onSelectColor }: ColorPickerProps) => {
    const { updateColor } = useContext(ColorContext)

    const changeColor = (color: string) => {
        updateColor(color)
        onSelectColor()
    }

    return (
        <div className="absolute bg-white p-2 rounded-md border border-gray100 shadow-md z-10 top-0 left-0 mt-8 grid grid-cols-6 gap-2 w-48 ">
            {colors.map((currentColor, index) => (
                <div
                    key={index}
                    className="w-6 h-6 rounded-full cursor-pointer"
                    style={{ backgroundColor: currentColor }}
                    onClick={() => {
                        changeColor(currentColor)
                    }}
                />
            ))}
        </div>
    )
}
