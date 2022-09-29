import { styled } from "..";

export const HomeContainer = styled('main',{
    section:{
        position: 'relative',
        width: 500,
        height: 500,
        background: '$productBackground',

        div: {
            position: 'absolute',
            bottom: 0,
            rigth: 0,     
            width: 200,
            height: 200,
            background: 'purple',
        }
    }
})

export const Product = styled('div', {
    position: 'relative',
    background: '$productBackground',
    
    width: '43.5rem',
    height: '41rem',

    padding: '.25rem',
    borderRadius: 8,
})

export const ProductInfo = styled('footer', {
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    position: 'absolute',

  

    background: "red",
    filter: 'opacity(.8)',

   
    paddingRight: 40,
    paddingLeft: 32,
    borderRadius: 6,

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all .2s ease-in-out',

    strong:{
        color: "White",
        fontSize: '$lg'
    },

    span: {
        fontWeight: 'bold',
        color: "$green300",
        fontSize: '$lg'
    }
})


export const PurchaseButton = styled('button', {
    position: 'absolute',

    width: '3.5rem',
    height: '3.5rem',

    bottom: 30,

    backgroundColor: '$primary',
    borderRadius: 6,
})
