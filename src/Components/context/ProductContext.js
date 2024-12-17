
import axios from "axios";
import { useContext, createContext, useState } from "react";

// 1. create new Context
const productContext = createContext();

// 3. custom hook
export const useProduct = () => {
    let value = useContext(productContext);
    return value;
}

// 2. create provider
const ProductContext = ({ children }) => {

    const [products, setProducts] = useState([]);

    // Product Url
    const URL = "https://api.pujakaitem.com/api/products";

    const getApiData = async () => {
        const response = await axios.get(URL);
        setProducts([...response.data]);
    }

    return (
        <productContext.Provider value={{ getApiData, products }}>
            {children}
        </productContext.Provider>
    )
}

export default ProductContext
