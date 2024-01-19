import { FaRegStar } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { RiPaintFill } from 'react-icons/ri'
import { TfiPencil } from 'react-icons/tfi'

export const Task = () => {
    return (
        <div className="md:w-[390px] md:mx-0 mx-auto mb-4 h-[437.59px] max-w-[90%] w-[400px] bg-white rounded-[25px] shadow">
            <div className="flex items-center py-3 px-4 justify-between border-b-2 border-b-gray100 w-full">
                <h1 className="font-bold text-gray700">Título</h1>
                <FaRegStar size={20} className="text-gray400 cursor-pointer" />
            </div>

            <textarea
                name=""
                id=""
                className="h-[75%]  w-full resize-none outline-none p-3 text-gray700"
                placeholder="Clique ou arraste o arquivo para esta área para fazer upload"
                disabled={true}
            ></textarea>

            <div className="flex p-4 justify-between">
                <div className="flex gap-3">
                    <TfiPencil size={20} className="cursor-pointer" />
                    <RiPaintFill
                        size={20}
                        className="text-orange400 cursor-pointer"
                    />
                </div>
                <IoMdClose size={24} className="text-gray800 cursor-pointer" />
            </div>
        </div>
    )
}
