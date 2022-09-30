import { globalCss } from ".";

export const globalStyles = globalCss({
    '*' : {
        margin: 0,
        border: 0,
        outline: 'none',
        boxSizing: 'border-box',
        padding: 0,
    },

    '*:focus':{
        boxShadow: '0px 0px 0px 2px #00875F',
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