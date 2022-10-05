import { styled } from "../../styles";

export const HeaderContainer = styled('header',{
    display: 'flex',
    justifyContent: 'space-between',

    width: '100%',
    maxWidth: 1228,
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
    right: '-0.81rem',
    top: -10,

    width: '1.62rem',
    height: '1.62rem',
    
    borderRadius: 13,
    
    background: '$background',
    padding: 3,
    overflow: 'hidden',

    div:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        width: '1.25rem',
        height: '1.25rem',
        
        borderRadius: 13,
        backgroundColor: '$primary',

        span:{
            fontSize: '0.75rem',
    
        }
    }

})