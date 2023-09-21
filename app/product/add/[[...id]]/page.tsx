"use client"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { useParams } from 'next/navigation'
import { getProductById } from "@/app/apis"
import { ProductForm } from "@/app/forms/product"

const ProductPage = () => {
    const params = useParams()
    const { id } = params
    const [product, setProduct] = useState({});
    const [isEdit, setIsEdit] = useState('')
    useEffect(() => {
        isEditFunction()
    }, [])
    const isEditFunction = async () => {
        try {
            if (id) {
                const productDetail = await getProductById(id)
                setIsEdit(id[0])
                setProduct(productDetail.data)
            }
        }
        catch (error) {
            console.log("🚀 ~ file: page.tsx:21 ~ isEditFunction ~ error:", error)
        }
    }
    return (
        <div className="w-full h-full">
            <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                <div className="flex justify-between align-center text-gray-700 text-lg font-semibold py-2 px-2">
                    <p>{isEdit ? "Edit Product" : "Add Product"}</p>
                    <Link href='/product' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Back
                    </Link>
                </div>
                <div className="w-full">
                    <ProductForm
                        isEdit={isEdit}
                        product={product}
                    />
                </div>
            </div>
        </div >
    )
}
export default ProductPage