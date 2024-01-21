import { ReactNode, createContext, useState } from 'react'
import { colors } from '../utils/colors'

interface ColorContextProps {
    selectedColor: string
    updateColor: (newColor: string) => void
}

const ColorContext = createContext({} as ColorContextProps)

interface ColorProviderProps {
    children: ReactNode
}
export const ColorProvider = ({ children }: ColorProviderProps) => {
    const [selectedColor, setSelectedColor] = useState(colors[0])

    const updateColor = (newColor: string) => {
        setSelectedColor(newColor)
    }

    return (
        <ColorContext.Provider value={{ selectedColor, updateColor }}>
            {children}
        </ColorContext.Provider>
    )
}

export default ColorContext
