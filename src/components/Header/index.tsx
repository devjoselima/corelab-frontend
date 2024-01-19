import { useState } from 'react'

import { IoMdClose } from 'react-icons/io'

import { Logo } from '../Logo'
import { SearchInput } from '../SearchInput'
import { FaArrowDown } from 'react-icons/fa6'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(true)

    const handleOpenHeader = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen)
    }

    return (
        <>
            {isOpen ? (
                <header className="bg-white flex justify-between items-center py-5 px-6 shadow-headerShadow ring-offset-1 ring-gray-600">
                    <div className="flex items center gap-4 flex-col md:flex-row">
                        <Logo />
                        <SearchInput />
                    </div>
                    <IoMdClose
                        size={24}
                        className="text-gray800 cursor-pointer"
                        onClick={handleOpenHeader}
                    />
                </header>
            ) : (
                <header className="flex justify-end items-center py-5 px-6">
                    <FaArrowDown
                        size={24}
                        className="text-gray800 cursor-pointer"
                        onClick={handleOpenHeader}
                    />
                </header>
            )}
        </>
    )
}
