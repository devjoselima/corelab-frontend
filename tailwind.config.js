/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        boxShadow: {
            inputShadow: '1px 1px 3px 0px rgba(0, 0, 0, 0.25)',
            headerShadow: '1px 1px 10px 1px rgba(0, 0, 0, 0.25)',
        },
        colors: {
            white: '#fff',
            gray400: '#455A64',
            gray100: '#D9D9D9',
            gray200: '#9E9E9E',
            blue: '#BAE2FF',
            lightGreen: '#B9FFDD',
            amber: '#FFE8AC',
            orange200: '#FFCAB9',
            red: '#F99494',
            lightBlue: '#9DD6FF',
            purple: '#ECA1FF',
            lime: '#DAFF8B',
            orange100: '#FFA285',
            grey400: '#CDCDCD',
            grey600: '#979797',
            yellow: '#A99A7C',
        },
        extend: {},
    },
    plugins: [],
}
