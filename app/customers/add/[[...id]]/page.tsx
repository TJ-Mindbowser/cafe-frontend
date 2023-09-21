"use client"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { CustomerForm } from "@/app/forms/customer"
import { useParams } from 'next/navigation'
import { getCustomerById } from "@/app/apis"

const CustomerPage = () => {
    const params = useParams()
    const { id } = params
    const [customer, setCustomer] = useState({});
    const [isEdit, setIsEdit] = useState('')
    useEffect(() => {
        isEditFunction()
    }, [])
    const isEditFunction = async () => {
        try {
            if (id) {
                const customerDetail = await getCustomerById(id)
                setIsEdit(id[0])
                setCustomer(customerDetail.data)
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
                    <p>{isEdit ? "Edit Customer" : "Add Customer"}</p>
                    <Link href='/customers' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Back
                    </Link>
                </div>
                <div className="w-full">
                    <CustomerForm
                        isEdit={isEdit}
                        customer={customer}
                    />
                </div>
            </div>
        </div >
    )
}
export default CustomerPage