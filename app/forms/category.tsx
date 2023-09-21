"use client"
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { addCategory, editCategory } from '../apis'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useRef } from 'react';

export const CategoryForm = ({ isEdit, category }) => {
    const router = useRouter()
    const formRef = useRef()
    const [form, setForm] = useState({ name: '' })
    useEffect(() => {
        checkIsEdit()
    }, [isEdit])
    const checkIsEdit = () => {
        if (isEdit) {
            formRef.current.setFieldValue('name', category.name)
        }
    }
    const CategorySchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required')
    });
    const handleFormSubmit = async (formData: Object) => {
        try {
            let response = await !isEdit ? addCategory(formData) : editCategory(formData, isEdit)
            router.push('/category')
        } catch (error) {
            console.log("🚀 ~ file: category.tsx:15 ~ handleFormSubmit ~ error:", error)
        }
    }
    return (
        <div className="mb-6">
            <Formik
                innerRef={formRef}
                initialValues={form}
                validationSchema={CategorySchema}
                onSubmit={handleFormSubmit}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        {errors.name && touched.name && errors.name}
                        <Field
                            className="bg-gray-50 m-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter Category"
                            type="text"
                            name="name"
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
