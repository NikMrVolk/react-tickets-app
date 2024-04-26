/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'main-bg': '#F1F6FA',
                'btn-standard': '#FF4D00',
                'btn-standard-hover': '#FF6700',
                'btn-standard-text': '#FFF1E7',
            },
            spacing: {
                mainLayoutCalc: 'calc(50% - 38rem);',
            },
        },
    },
    plugins: [],
}
