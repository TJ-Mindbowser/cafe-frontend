"use client"
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { addProduct, editProduct } from '../apis'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useRef } from 'react';

export const ProductForm = ({ isEdit, product }) => {
    const router = useRouter()
    const formRef = useRef()
    const [form, setForm] = useState({ name: '', description: '', price: '', category: '' })
    useEffect(() => {
        checkIsEdit()
    }, [isEdit])
    const checkIsEdit = () => {
        if (isEdit) {
            formRef.current.setFieldValue('name', product.name)
            formRef.current.setFieldValue('description', product.description)
            formRef.current.setFieldValue('price', product.price)
            formRef.current.setFieldValue('category', product.category)
        }
    }
    const CustomerSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Name is required'),
        description: Yup.string()
            .required('Description is required'),
        price: Yup.number()
            .required('Price is required'),
        category: Yup.string()
            .required('Category is required')
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
    }
    );
    const handleFormSubmit = async (formData: Object) => {
        try {
            let response = await !isEdit ? addProduct(formData) : editProduct(formData, isEdit)
            router.push('/product')
        } catch (error) {
            console.log("🚀 ~ file: category.tsx:15 ~ handleFormSubmit ~ error:", error)
        }
    }
    return (
        <div className="mb-6">
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
                        {errors.description && touched.description && errors.description}
                        <Field
                            className="bg-gray-50 m-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter description"
                            type="text"
                            name="description"
                        />
                        {errors.price && touched.price && errors.price}
                        <Field
                            className="bg-gray-50 m-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter price"
                            type="text"
                            name="price"
                        />
                        {errors.category && touched.category && errors.category}
                        <Field
                            className="bg-gray-50 m-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter category"
                            type="text"
                            name="category"
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
