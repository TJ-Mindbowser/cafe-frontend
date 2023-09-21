import React from "react"
import { Product } from "../components/product"
import { getProducts } from "../apis"

async function fetchData() {
    const products = await getProducts()
    return { products }
}
const productPage = async () => {

    let { products } = await fetchData()
    return (
        <>
            <div className="body h-full">
                <Product data={products} />
            </div>
        </>
    )
}

export default productPage