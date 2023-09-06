const API: String = 'https://cafe-crm-backend.onrender.com'

/**
 * API to fetch Category list
 * @returns 
 */
export const getCategory = async () => {
    try {
        let res = await fetch(`${API}/category`)
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
export const getProducts = async () => {
    try {
        let res = await fetch(`${API}/product`)
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
export const getOrders = async () => {
    try {
        let res = await fetch(`${API}/order`)
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}
