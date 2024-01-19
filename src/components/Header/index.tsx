import { Logo } from '../Logo'
import { SearchInput } from '../SearchInput'

export const Header = () => {
    return (
        <header className=" flex justify-between items-center py-5 px-6 shadow-headerShadow ring-offset-1 ring-gray-600">
            <div className="flex items center gap-4 flex-col md:flex-row">
                <Logo />
                <SearchInput />
            </div>
            <span className="text-gray400 font-500 text-2xl">x</span>
        </header>
    )
}
