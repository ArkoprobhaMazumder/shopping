import { createContext, useContext, useEffect, useState } from "react";
import { useProduct } from "./ProductContext";



const filterContext = createContext();

export const useFilterContext = () => {
    let value = useContext(filterContext);
    return value;
}


const FilterContext = ({ children }) => {

    const [filter, setFilter] = useState([]);
    const { products } = useProduct();

    const categoryFilter = (type) => {
        if (type == 'all') {
            setFilter([...products]);
        } else {
            let result = [];
            products.forEach((ele) => {
                if (ele.category == type) {
                    result.push(ele);
                }
            })
            setFilter([...result]);
        }
    }

    const comapanyFilter = (type) => {
        if (type == 'all') {
            setFilter([...products]);
        } else {
            let result = [];
            products.forEach((ele) => {
                if (ele.company == type) {
                    result.push(ele);
                }
            })
            setFilter([...result]);
        }
    }


    useEffect(() => {
        setFilter([...products]);
    }, [products]);


    return (
        <filterContext.Provider value={{ filter, categoryFilter, comapanyFilter, setFilter }}>
            {children}
        </filterContext.Provider>
    )
}

export default FilterContext
