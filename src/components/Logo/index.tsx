import LogoImage from '../../assets/logo.svg'

export const Logo = () => {
    return (
        <div className="flex items-center gap-4">
            <img src={LogoImage} alt="bloco de notas" />
            <span className="text-gray400 text-lg">CoreNotes</span>
        </div>
    )
}
