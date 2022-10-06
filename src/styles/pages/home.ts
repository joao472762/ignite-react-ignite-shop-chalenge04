import { styled } from "..";

export const HomeContainer = styled('main',{
    width: '100%',
    paddingLeft: '1.5rem',
    maxWidth: 'calc(100vw - ((100vw - 1196px) / 2))',
    marginLeft: 'auto'
})

export const Product = styled('div', {
    position: 'relative',
    background: '$productBackground',
    
    width: '43.5rem',
    height: '41rem',

    padding: '.25rem',
    borderRadius: 8,
    overflow: 'hidden',

    img:{
        objectFit: 'cover'
    },

    a:{

        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',

        height: '100%',
        width: '100%',
    },


    '&:hover': {

        footer:{
            transform: 'translateY(0%)',
            opacity: 1,

        },
        button: {
            transform: 'translateY(0%)',
            opacity: 1,
        }
        
    }
})

export const ProductInfo = styled('footer', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    position: 'absolute',
    left: '0.25rem',
    bottom: '0.25rem',
    right: '0.25rem',

    background: "#000",
    paddingLeft: 20,
    filter: 'opacity(.8)',

   height: '6.875rem',
   borderRadius: 6,

   transform: 'translateY(120%)',
   opacity: 0,
   transition: 'all .2s ease-in-out',


  

    h2:{
        color: "White",
        fontSize: '$lg'
    },

    strong: {
        fontWeight: 'bold',
        color: "$primary",
        fontSize: '$lg'
    }
})


export const PurchaseButton = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    right: '2rem',
    bottom: '1.9rem',

    width: '3.5rem',
    height: '3.5rem',

    transform: 'translateY(120%)',
    transition: 'all .2s ease-in-out',
    opacity: 0,
    
    backgroundColor: '$primary',
    borderRadius: 6,
    cursor: 'pointer',
    
    svg:{
        fontSize: 32
    }
})
