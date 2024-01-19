import { useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

export const TaskHeader = () => {
    const [isFavorited, setIsFavorited] = useState(false)

    const handleFavoriteTask = () => {
        setIsFavorited((prevIsFavorited) => !prevIsFavorited)
    }
    return (
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
    )
}
