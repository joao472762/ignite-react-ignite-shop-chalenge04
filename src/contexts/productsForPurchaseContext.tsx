import { v4 as uuidv4 } from 'uuid'
import { createContext, ReactNode, useState } from "react";

interface ProductsForPurchaseContextType {
    products: ProductInCartProps[],
    removeOneProduct: (productId: string) => void,
    addNewProduct: (product:ProductProps) => void
}

interface ProductsForPurchaseContextProviderProps {
    children: ReactNode
}

export interface ProductProps {
    id: string,
    priceId: string,
    name: string,
    imageUrl: string,
    price: number,
    priceFormated: string
}

interface ProductInCartProps extends ProductProps{
    key: string
}

export const ProductsForPurchaseContext = createContext({} as ProductsForPurchaseContextType)

export function ProductsForPurchaseContextProvider({children}: ProductsForPurchaseContextProviderProps) {
    const [products, setProducts] = useState<ProductInCartProps[]>([])

    function addNewProduct(product: ProductProps){
        const newProduct:ProductInCartProps = {
            key: uuidv4(),
            ...product,
        }
        setProducts(state => [newProduct, ...state])
    }

    function removeOneProduct(productkey: string){
        console.log(productkey)
        const producstsUpdated = products.filter(product => {
            return product.key != productkey
        } )
        

        setProducts(producstsUpdated)
    }

    return (
        <ProductsForPurchaseContext.Provider value={
            {products,addNewProduct,removeOneProduct}
        }
        >
            {children}
        </ProductsForPurchaseContext.Provider>
    )
}