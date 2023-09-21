"use client"
import { useState, useEffect } from 'react'
import { getCategory, getCustomer, getProducts } from './apis'

export default function Home() {
  const [data, setData] = useState({})
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const categories = await getCategory()
    const products = await getProducts()
    const customers = await getCustomer()
    setData({ categoryCount: categories.data.length, productCount: products.data.length, customerCount: customers.data.length })
  }
  return (
    <>
      <div className='flex justify-center align-center gap-4 mt-50'>
        <section className="block max-w-sm p-6 bg-sky-200 text-white">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total Customers</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">{data.customerCount}</p>
        </section>
        <section className="block max-w-sm p-6 bg-rose-500">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total Products</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">{data.productCount}</p>
        </section>
        <section className="block max-w-sm p-6 bg-neutral-400">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total Categories</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">{data.categoryCount}</p>
        </section>
      </div>
    </>
  )
}
