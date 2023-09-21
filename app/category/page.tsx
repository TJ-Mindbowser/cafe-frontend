import React from "react"
import { Category } from "../components/category"
import { getCategory } from "../apis"

async function fetchData() {
    const categories = await getCategory()
    return { categories }
}
const categoryPage = async () => {

    let { categories } = await fetchData()
    return (
        <>
            <div className="body h-full">
                <Category data={categories} />
            </div>
        </>
    )
}

export default categoryPage