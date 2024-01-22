import { ChangeEvent, useContext, useState } from 'react'

import TaskContext from '../../context/TaskContext'

import { IoMdSearch } from 'react-icons/io'
import { GrPowerReset } from 'react-icons/gr'

export const SearchInput = () => {
    const { searchTask, setFilteredTask } = useContext(TaskContext)

    const [searchValue, setSearchValue] = useState<string>('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    const handleSearchTask = () => {
        searchTask(searchValue)
    }

    const handleResetFields = () => {
        setFilteredTask([])

        setSearchValue('')
    }

    return (
        <div className="relative flex items-center">
            <input
                type="text"
                className="md:w-[500px] w-max shadow-inputShadow ring-offset-1 ring-gray-600 border outline-none border-gray100 rounded  p-2 text-sm"
                placeholder="Pesquisar notas"
                value={searchValue}
                onChange={handleChange}
            />

            <div className="flex items-center gap-2 relative right-14">
                <button onClick={handleSearchTask}>
                    <IoMdSearch size={22} className="text-gray200" />
                </button>

                <button onClick={handleResetFields}>
                    <GrPowerReset size={18} className=" text-gray200" />
                </button>
            </div>
        </div>
    )
}
