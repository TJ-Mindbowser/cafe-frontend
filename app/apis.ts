// const API: String = 'https://cafe-crm-backend.onrender.com'
const API: String = 'http://localhost:8080'

async function PostData(url: any, data = {}, method = "POST") {
    // Default options are marked with *
    const response = await fetch(url, {
        method, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            "Content-Type": "application/json",
        }, body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

/**
 * API to fetch Category list
 * @returns 
 */
export const getCategory = async () => {
    try {
        let res = await fetch(`${API}/category`, { next: { revalidate: 0 } })
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}
/**
 * API to fetch data by category Id
 * @param id 
 * @returns 
 */
export const getCategoryById = async (id: String) => {
    try {
        let res = await fetch(`${API}/category/${id}`, { next: { revalidate: 0 } })
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}
/**
 * API to add category
 * @param categoryData 
 */
export const addCategory = async (categoryData: Object) => {
    try {
        let res = await PostData(`${API}/category`, categoryData)
        return res
    } catch (error) {
        throw new Error(error)
    }
}
/**
 * API to add category
 * @param categoryData 
 */
export const editCategory = async (categoryData: Object, id) => {
    try {
        let res = await PostData(`${API}/category/${id}`, categoryData, "PUT")
        return res
    } catch (error) {
        throw new Error(error)
    }
}
export const getCustomer = async () => {
    try {
        let res = await fetch(`${API}/customer`, { next: { revalidate: 0 } })
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}
/**
 * API to fetch data by customer Id
 * @param id 
 * @returns 
 */
export const getCustomerById = async (id: String) => {
    try {
        let res = await fetch(`${API}/customer/${id}`, { next: { revalidate: 0 } })
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}
/**
 * API to add customer
 * @param customerData 
 */
export const addCustomer = async (customerData: Object) => {
    try {
        let res = await PostData(`${API}/customer`, customerData)
        return res
    } catch (error) {
        throw new Error(error)
    }
}
/**
 * API to edit customer
 * @param categoryData 
 */
export const editCustomer = async (customerData: Object, id) => {
    try {
        let res = await PostData(`${API}/customer/${id}`, customerData, "PUT")
        return res
    } catch (error) {
        throw new Error(error)
    }
}
/**
 * API to get products
 * @returns 
 */
export const getProducts = async () => {
    try {
        let res = await fetch(`${API}/product`, { next: { revalidate: 3600 } })
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}
/**
 * API to get products
 * @returns 
 */
export const getProductById = async (id: String) => {
    try {
        let res = await fetch(`${API}/product/${id}`, { next: { revalidate: 3600 } })
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}
/**
 * API to add product
 * @param productData 
 */
export const addProduct = async (productData: Object) => {
    try {
        let res = await PostData(`${API}/product`, productData)
        return res
    } catch (error) {
        throw new Error(error)
    }
}
/**
 * API to edit product
 * @param productData 
 */
export const editProduct = async (productData: Object, id) => {
    try {
        let res = await PostData(`${API}/product/${id}`, productData, "PUT")
        return res
    } catch (error) {
        throw new Error(error)
    }
}
/**
 * API to get orders
 * @returns 
 */
export const getOrder = async () => {
    try {
        let res = await fetch(`${API}/order`, { next: { revalidate: 3600 } })
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}
/**
 * API to get orders by id
 * @returns 
 */
export const getOrderById = async (id) => {
    try {
        let res = await fetch(`${API}/order/${id}`, { next: { revalidate: 3600 } })
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}
/**
 * API to add order
 * @returns 
 */
export const addOrders = async (productData: Object) => {
    try {
        let res = await PostData(`${API}/order`, productData)
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}
/**
 * API to get orders
 * @returns 
 */
export const editOrders = async (orderData: Object, id: String) => {
    try {
        let res = await PostData(`${API}/order/${id}`, orderData, "PUT")
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}
