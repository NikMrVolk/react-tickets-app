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
                'ticket-plane-line': '#CBD0D1',
            },
            spacing: {
                0.25: '0.0625rem', // 1px
                mainLayoutCalc: 'calc(50% - 38rem);',
            },
            gridTemplateColumns: {
                ticketsSearch: '1fr 2fr',
                ticketElement: '1fr 1.75fr',
            },
        },
    },
    plugins: [],
}
