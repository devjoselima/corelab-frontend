import { useContext } from 'react'

import TaskContext from '../../context/TaskContext'

import { IoMdSearch } from 'react-icons/io'

export const SearchInput = () => {
    const { searchValue, setSearchValue } = useContext(TaskContext)

    return (
        <div className="relative flex items-center">
            <input
                type="text"
                className="md:w-[500px] w-max shadow-inputShadow ring-offset-1 ring-gray-600 border outline-none border-gray100 rounded  p-2 text-sm"
                placeholder="Pesquisar notas"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
            />

            <button className="relative right-7">
                <IoMdSearch size={22} className="text-gray200" />
            </button>
        </div>
    )
}
