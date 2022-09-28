import { createStitches } from "@stitches/react";

export const {
    css,
    theme,
    config,
    styled,
    globalCss,
    getCssText,
    keyframes,
    createTheme,
} = createStitches({
    theme:{
        colors:{
            primary: '#00B37E',
            primaryLight: '#00875F',

            background: '#121214',
            elements: '#202024',

            icon: '#8D8D99',
            text: '#C4C4CC',
            title: '#E1E1E6',
            
            white: '#fff'

        },
        fontSizes: {
            'regular': '1.125rem',
            'medium': '1.25rem',
            'xl': '1.5rem',
            '2xl': '2rem',
        },
        fonts:{
            default: 'Roboto, sans-serif'
        }
    }
    
})