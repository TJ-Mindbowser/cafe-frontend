import Image from 'next/image'
import { Category } from './components/category'
import { Product } from './components/product'
import { Table } from './components/table'
import { getCategory, getProducts, getOrders } from './apis'
import { Modal } from './components/modal'

async function fetchData() {
  const categories = await getCategory()
  const products = await getProducts()
  const orders = await getOrders()
  return { categories, products, orders }
}

export default async function Home() {
  let { categories } = await fetchData()
  return (
    <main className="flex min-h-screen">
      <div className="w-/4 max-w-screen-xl">
        <div className="flex flex-col justify-start p-4 px-3 py-10">
          <Category
            data={categories} />
          <Product />
        </div>
      </div>
      <div className="w-full">
        <Table />
      </div>
    </main>
  )
}
