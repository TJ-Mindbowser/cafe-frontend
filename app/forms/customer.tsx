"use client"
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { addCustomer, editCustomer } from '../apis'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useRef } from 'react';

export const CustomerForm = ({ isEdit, customer }) => {
    const router = useRouter()
    const formRef = useRef()
    const [form, setForm] = useState({ name: '', address: '', phone: '' })
    useEffect(() => {
        checkIsEdit()
    }, [isEdit])
    const checkIsEdit = () => {
        if (isEdit) {
            formRef.current.setFieldValue('name', customer.name)
            formRef.current.setFieldValue('address', customer.address)
            formRef.current.setFieldValue('phone', customer.phone)
        }
    }
    const CustomerSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Name is required'),
        address: Yup.string()
            .required('Address is required'),
        phone: Yup.string()
            .required('Phone Number is required')
    }
    );
    const handleFormSubmit = async (formData: Object) => {
        try {
            let response = await !isEdit ? addCustomer(formData) : editCustomer(formData, isEdit)
            router.push('/customers')
        } catch (error) {
            console.log("🚀 ~ file: category.tsx:15 ~ handleFormSubmit ~ error:", error)
        }
    }
    return (
        <div className="mb-6 flex-col gap-1">
            <Formik
                innerRef={formRef}
                initialValues={form}
                validationSchema={CustomerSchema}
                onSubmit={handleFormSubmit}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <Form onSubmit={handleSubmit}>
                        {errors.name && touched.name && errors.name}
                        <Field
                            className="bg-gray-50 m-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter Name"
                            type="text"
                            name="name"
                        />
                        {errors.phone && touched.phone && errors.phone}
                        <Field
                            className="bg-gray-50 m-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter Phone"
                            type="text"
                            name="phone"
                        />
                        {errors.address && touched.address && errors.address}
                        <Field
                            className="bg-gray-50 m-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter Address"
                            type="text"
                            name="address"
                        />
                        <button
                            className="bg-blue-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded"
                            type="submit"
                            disabled={isSubmitting}>
                            {isEdit ? 'Update' : 'Add'}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
