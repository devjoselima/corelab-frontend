import { ReactNode, createContext, useState } from 'react'

interface ColorContextProps {
    selectedColor: string
    updateColor: (newColor: string) => void
}

const ColorContext = createContext({} as ColorContextProps)

interface ColorProviderProps {
    children: ReactNode
}
export const ColorProvider = ({ children }: ColorProviderProps) => {
    const [selectedColor, setSelectedColor] = useState('#fff')

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
