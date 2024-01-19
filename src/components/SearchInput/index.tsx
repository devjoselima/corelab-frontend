import { IoMdSearch } from 'react-icons/io'

export const SearchInput = () => {
    return (
        <div className="relative flex items-center">
            <input
                type="text"
                className="md:w-[500px] w-max   shadow-inputShadow ring-offset-1 ring-gray-600 border border-gray100 rounded  p-2 text-sm"
                placeholder="Pesquisar notas"
            />
            <button className="relative right-7">
                <IoMdSearch size={22} className="text-gray200" />
            </button>
        </div>
    )
}
