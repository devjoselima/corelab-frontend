import { useContext } from 'react'
import { IoMdSearch } from 'react-icons/io'
import TaskContext from '../../context/TaskContext'

interface SearchInputProps {
    onSearch: (searchValue: string) => void
}

export const SearchInput = ({ onSearch }: SearchInputProps) => {
    const { searchValue, setSearchValue } = useContext(TaskContext)

    const handleSearch = () => {
        onSearch(searchValue)
    }
    return (
        <div className="relative flex items-center">
            <input
                type="text"
                className="md:w-[500px] w-max shadow-inputShadow ring-offset-1 ring-gray-600 border border-gray100 rounded  p-2 text-sm"
                placeholder="Pesquisar notas"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
            />

            <button className="relative right-7" onClick={handleSearch}>
                <IoMdSearch size={22} className="text-gray200" />
            </button>
        </div>
    )
}
