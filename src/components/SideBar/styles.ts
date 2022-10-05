import { keyframes, styled } from "../../styles";
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay,{
    position: 'fixed',
    inset: 0,
    zIndex: 2,
    
    width: '100vw',
    height: '100vh',
})




const scroolToLeft = keyframes({
    '0%': { transform: 'translatex(120%)' },
    '100%': { transform: 'translatex(0%)' },
});

export const Content = styled(Dialog.Content,{
    display: 'flex',
    flexDirection: 'column',

    position: 'fixed',
    top: '0',
    right: '0',
    animation: `${scroolToLeft} .2s ease-out`,

    width: '30rem',
    height: '100vh',
    
    padding: '3rem',
    paddingTop: '4rem',
    opacity: 1,
    backgroundColor: '$elements',


})

export const Close  = styled(Dialog.Close, {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    lineHeight: 0,
    background: 'none',

    svg:{
        fontSize: '1.25rem',
        color: '$icon'
    }
})

export const Title  = styled(Dialog.Title, {
    color: '$title',
    fontSize: 'medium',
})


export const Products = styled('section',{
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1.5rem',

    overflowX: 'auto',
    margin: '2rem 0',
    
    msOverFlowStyle: 'none',
    scrollbarWidth: 'none',
    
    '&::-webkit-scrollbar': {
        display: 'none'
    }

})

export const Product = styled('div', {
    display: 'flex',
    alignItems: 'center',
    columnGap: '1.25rem',

    div: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
        background: '$productBackground',
        borderRadius: 8,
        height: '6.25rem',
        width: '5.8rem',

        img:{
            objectFit: "cover"
        }

    },

    aside: {
        h2:{
            fontSize: '$regular',
            fontWeight: 'normal',
            lineHeight: 1.6
    
        },
        strong: {
            display: 'block',
            color: '$title',
            marginTop: '.125rem'
        },
    
        button:{
            color: '$primary',
            fontWeight: "bold",
            fontSize: '$small',

            
            background: 'none',
            marginTop: '.5rem'
        }
    
    },

})

export const  PurchaseFooter = styled('footer', {    
    marginTop: 'auto',

    section: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        

        div: {

            
            span: {
                display: 'block',
                fontSize: '$small',
                color: '$title'
        
            },
        
            strong: {
                marginTop: '0.43rem',
            },

            '&:last-child':{
                color: '$text',
                textAlign: 'right',

                strong: {
                    fontSize: '$xl'
                }
            }

        }
    },

    button: {
        color: '$white',
        fontWeight: 'bold',

        width: '100%',
        padding: 20,
        marginTop: '3.56rem',
        cursor: 'pointer',
        backgroundColor: '$primary',
        borderRadius: 8,
        transition: 'all .2s',

        '&:hover': {
            backgroundColor: '$primaryLight',    
        }
    
        
    }

})
