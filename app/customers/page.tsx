import React from "react"
import { Customer } from "../components/customer"
import { getCustomer } from "../apis"

async function fetchData() {
    const customers = await getCustomer()
    return { customers }
}
const customerPage = async () => {

    let { customers } = await fetchData()
    return (
        <>
            <div className="body h-full">
                <Customer data={customers} />
            </div>
        </>
    )
}

export default customerPage