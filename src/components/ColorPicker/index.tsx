interface ColorPickerProps {
    onSelectColor: (color: string) => void
}

export const ColorPicker = ({ onSelectColor }: ColorPickerProps) => {
    const colors = [
        '#BAE2FF',
        '#B9FFDD',
        '#FFE8AC',
        '#FFCAB9',
        '#F99494',
        '#9DD6FF',
        '#9DD6FF',
        '#DAFF8B',
        '#FFA285',
        '#CDCDCD',
        '#979797',
        '#A99A7C',
    ]

    return (
        <div className="absolute bg-white p-2 rounded-md border border-gray100 shadow-md z-10 top-0 left-0 mt-8 grid grid-cols-6 gap-2 w-48 ">
            {colors.map((color, index) => (
                <div
                    key={index}
                    className="w-6 h-6 rounded-full cursor-pointer"
                    style={{ backgroundColor: color }}
                    onClick={() => onSelectColor(color)}
                />
            ))}
            {/* <IoMdClose className="cursor-pointer" onClick={onClose} /> */}
        </div>
    )
}
