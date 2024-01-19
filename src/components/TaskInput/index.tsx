import { FaRegStar } from 'react-icons/fa'

export const TaskInput = () => {
    return (
        <div className="md:w-[500px] bg-white mt-4 mb-5 w-80 mx-auto rounded-2xl">
            <div className="flex items-center py-3 px-4 justify-between border-b-2 border-b-gray100 w-full">
                <h1 className="font-bold text-gray700">Título</h1>
                <FaRegStar size={20} className="text-gray400" />
            </div>
            <input
                type="text "
                placeholder="Criar nota..."
                className="px-4 py-5 outline-none bg-transparent text-sm"
            />
        </div>
    )
}
