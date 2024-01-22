import { ChangeEvent, useContext } from 'react'

import TaskContext from '../../context/TaskContext'

import { IoMdSearch } from 'react-icons/io'

export const SearchInput = () => {
    const { searchValue, setSearchValue } = useContext(TaskContext)

    const handleSearchTask = () => {
        setSearchValue(searchValue)

        console.log(searchValue)

        setSearchValue('')
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Atualiza o valor de pesquisa sempre que o conteúdo do input muda
        setSearchValue(event.target.value)
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

            <button className="relative right-7" onClick={handleSearchTask}>
                <IoMdSearch size={22} className="text-gray200" />
            </button>
        </div>
    )
}
