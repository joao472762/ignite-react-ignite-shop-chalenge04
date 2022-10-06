import { styled } from ".."

export const ProductContainer = styled('main',{
    margin: '0 auto',
    maxWidth: 1228,
    padding: '0 1.5rem',

    section:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        background: '$productBackground',
        height: '35rem',
        borderRadius: 6,

        img:{
            objectFit: 'cover',
            width: '100%',
        },
    }

})

export const ProductWrapper = styled('div', {
    display: 'grid',
    rowGap: '2rem',
    columnGap: '4.5rem',
    gridTemplateColumns: 'repeat(auto-fill, minmax(550px, 1fr))',
    justifyContent: 'center',

    width: '100%',

    '@bp1':{
        gridTemplateColumns: '1fr'
    },
})

export const ProductInformations = styled('aside',{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
   

    h1:{
        marginTop: '1.62rem',
        fontWeight: 'bold',
        fontSize: '$2xl'
    },

    strong:{
        display: 'block',

        fontWeight: 'normal',
        fontSize:  '$2xl',

        marginTop: '1rem',
        color: '$primaryLight'

    },

    p:{
        marginTop: '2.5rem',
        marginBottom: '2.5rem',
        fontSize: '$regular',
        lineHeight: '160%'
    },


})

export const PurchaseButton = styled('button', {
    display: 'flex',
    justifyContent: 'center',

    marginTop: 'auto',
    padding: 20,
    borderRadius: 8,

    fontSize: '$regular',
    fontWeight: 'bold',
    color: '$title',

   
    backgroundColor: '$primary',
})