import LogoImage from '../../assets/logo.svg'

import { IoMdSearch } from 'react-icons/io'

export const Header = () => {
    return (
        <header className=" flex justify-between items-center py-5 px-6 shadow-headerShadow ring-offset-1 ring-gray-600">
            <div className="flex items center gap-4 flex-col md:flex-row">
                <div className="flex items-center gap-4">
                    <img src={LogoImage} alt="bloco de notas" />
                    <span className="text-gray400 text-lg">CoreNotes</span>
                </div>

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
            </div>
            <span className="text-gray400 font-500 text-2xl">x</span>
        </header>
    )
}
