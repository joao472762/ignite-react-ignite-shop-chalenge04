import { Columns } from "phosphor-react";
import { styled } from ".";

export const SuccessContainer = styled('main',{
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    h1:{
        marginTop: '3rem',
        color: '$title',
        fontSize: '$2xl'
    },

    p:{
        fontSize: '$xl',
        lineHeight: 1.4,

        marginTop: '1.5rem',
    },

    a: {
        marginTop: '4rem',

        color: '$primary',
        fontWeight: 'bold',
        textDecoration: 'none'
    }


})

export const ProductImages = styled('section',{
    display: 'flex'

})

export const ImageContainer = styled('div', {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',

    width: '8.75rem',
    height: '8.75rem',

    transform: 'translatex(-35%)',
    boxShadow: `0px 0px 0px .3px #0004`,



    borderRadius: '4.375rem',
    background: '$productBackground',

    '&:first-child': {
        transform: 'translatex(0%)'
    }
})