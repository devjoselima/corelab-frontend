import { IoMdClose } from 'react-icons/io'
import { RiPaintFill } from 'react-icons/ri'
import { TfiPencil } from 'react-icons/tfi'

interface TaskBodyProps {
    description: string
}

export const TaskBody = ({ description }: TaskBodyProps) => {
    return (
        <>
            <textarea
                value={description}
                className="h-[75%]  w-full resize-none outline-none p-3 text-gray700"
                placeholder="Clique ou arraste o arquivo para esta área para fazer upload"
                disabled={true}
            />

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
        </>
    )
}
