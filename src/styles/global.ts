import { globalCss } from ".";

export const globalStyles = globalCss({
    '*' : {
        margin: 0,
        border: 0,
        outline: 'none',
        boxSizing: 'border-box',
        padding: 0,
        inset: 0,
    },

    '*:focus':{
        boxShadow: '0 0 0 2 #00875F',
    },

    body: {
        backgroundColor: '$background'
    },

    'body, input, textarea, button':{
        fontFamily: '$default',
        lineHeight: 1.6,
        fontSize: '$regular',
        color: '$text'
    }
})