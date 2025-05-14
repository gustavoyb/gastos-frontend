import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@primer/react/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'primer': {
                    'gray': {
                        0: '#f6f8fa',
                        1: '#eaeef2',
                        2: '#d0d7de',
                        3: '#afb8c1',
                        4: '#8c959f',
                        5: '#6e7781',
                        6: '#57606a',
                        7: '#424a53',
                        8: '#32383f',
                        9: '#24292f',
                    },
                },
            },
        },
    },
    plugins: [],
}
export default config 