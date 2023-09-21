"use client"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { CategoryForm } from "@/app/forms/category"
import { useParams } from 'next/navigation'
import { getCategoryById } from "@/app/apis"

const CategoryPage = () => {
    const params = useParams()
    const { id } = params
    const [category, setCategory] = useState({});
    const [isEdit, setIsEdit] = useState('')
    useEffect(() => {
        isEditFunction()
    }, [])
    const isEditFunction = async () => {
        try {
            if (id) {
                const categoryDetail = await getCategoryById(id)
                setIsEdit(id[0])
                setCategory(categoryDetail.data)
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
                    <p>{isEdit ? "Edit Category" : "Add Category"}</p>
                    <Link href='/category' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Back
                    </Link>
                </div>
                <div className="w-full">
                    <CategoryForm
                        isEdit={isEdit}
                        category={category}
                    />
                </div>
            </div>
        </div >
    )
}
export default CategoryPage