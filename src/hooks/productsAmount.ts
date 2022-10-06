import { useContext } from "react";

import { FormatPrice } from "../utils/Formater";
import { ProductsForPurchaseContext } from "../contexts/productsForPurchaseContext";

export function ProductsAmount(){
    const {products} = useContext(ProductsForPurchaseContext)

    const productsAmount = products.reduce((acc, product) => {
        acc += product.price
        return acc
    },0)

    const productsAmountFormated = FormatPrice.format(productsAmount / 100)

    return {
        productsAmount,
        productsAmountFormated
    }
}