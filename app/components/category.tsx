import Link from "next/link"

export const Category = ({ data }: any) => {
    let categories = data.data
    return (
        <div className="w-full h-full">
            <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                <div className="flex justify-between align-center text-gray-700 text-lg font-semibold py-2 px-2">
                    <p>Category List</p>
                    <Link href='/category/add' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add Category
                    </Link>
                </div>
                <div className="flex items-center bg-gray-200 rounded-md">
                </div>
                <div className="py-3 text-sm">

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category: any, id: any) => {
                                    return (
                                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {category.name}
                                            </th>
                                            <td className="px-6 py-4 text-uppercase">
                                                <span className={`bg-${category.status == 'active' ? 'green-400' : 'gray-400'} h-2 w-2 m-2 rounded-full`}></span>
                                                {category.status}
                                            </td>
                                            <td className="px-6 py-4">
                                                <Link href={`/category/add/${category._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}