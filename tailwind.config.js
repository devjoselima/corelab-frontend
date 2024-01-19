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
            gray100: '#D9D9D9',
            gray200: '#CDCDCD',
            gray400: '#9E9E9E',
            gray500: '#979797',
            gray600: '#455A64',
            gray700: '#4F4F4D',
            gray800: '#51646E',
            gray900: '#333333',
            orange100: '#FFA285',
            orange200: '#FFCAB9',
            orange400: '#FFA000',
            blue: '#BAE2FF',
            lightGreen: '#B9FFDD',
            amber: '#FFE8AC',
            red: '#F99494',
            lightBlue: '#9DD6FF',
            purple: '#ECA1FF',
            lime: '#DAFF8B',
            yellow: '#A99A7C',
        },
        extend: {},
    },
    plugins: [],
}
