import { styled } from "../../styles";

export const HeaderContainer = styled('header',{
    display: 'flex',
    justifyContent: 'space-between',
    
    maxWidth: 1180,
    margin: '0 auto',

    padding: '0 1.5rem'
})

export const PurchasesButton = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

    width: '3rem',
    height: '3rem',

    cursor: 'pointer',

    padding: '0.75rem',
    borderRadius: 6,
    backgroundColor: '$elements',

    transition: '.2s background-color',

    '&:hover':{
        filter: 'opacity(.8)'
    },

    svg : {
        color: '$icon',
        fontSize: '1.5rem',
    },




})

export const PurchaseCounter = styled('div',{
    position: 'absolute',
    left: 28,
    top: -10,

    width: 26,
    height: 26,
    
    borderRadius: 13,
    
    background: '$background',
    padding: 3,
    overflow: 'hidden',

    div:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        width: 20,
        height: 20,
        
        borderRadius: 13,
        backgroundColor: '$primary',

        span:{
            fontSize: 12,
    
        }
    }

})