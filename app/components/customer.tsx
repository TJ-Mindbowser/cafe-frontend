import Link from "next/link"

export const Customer = ({ data }: any) => {
    let customers = data.data
    return (
        <div className="w-full h-full">
            <div className="bg-white rounded-lg px-3 py-2 mb-4">
                <div className="flex justify-between align-center text-gray-700 text-lg font-semibold py-2 px-2">
                    <p>Customer List</p>
                    <Link href='/customers/add' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add Customer
                    </Link>
                </div>
                <div className="py-3 text-sm">
                    <div className="relative overflow-x-auto sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Phone
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Address
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((customer: any, id: any) => {
                                    return (
                                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {customer.name}
                                            </th>
                                            <td className="px-6 py-4 text-uppercase">
                                                {customer.phone}
                                            </td>
                                            <td className="px-6 py-4 text-uppercase">
                                                {customer.address}
                                            </td>
                                            <td className="px-6 py-4">
                                                <Link href={`/customers/add/${customer._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
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