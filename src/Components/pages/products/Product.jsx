import { useState } from "react";
import Filter from "../../features/filter/Filter";
import styled from "./product.module.css";
import Gridview from "../../features/productView/Gridview";
import ListView from "../../features/productView/ListView";
import { useFilterContext } from "../../context/FilterContext";

const Product = () => {

    const [view, setView] = useState('grid');
    const { filter, setFilter } = useFilterContext();

    const priceFilter = (type) => {
        if (type == "Low to High") {
            for (let i = 0; i < filter.length; i++) {
                for (let j = i + 1; j < filter.length; j++) {
                    if (filter[i].price > filter[j].price) {
                        let temp = filter[i];
                        filter[i] = filter[j];
                        filter[j] = temp;
                    }
                }
            }
            setFilter([...filter]);
        }
        if (type == "High to Low") {
            for (let i = 0; i < filter.length; i++) {
                for (let j = i + 1; j < filter.length; j++) {
                    if (filter[i].price < filter[j].price) {
                        let temp = filter[i];
                        filter[i] = filter[j];
                        filter[j] = temp;
                    }
                }
            }
            setFilter([...filter]);
        }
    }


    return (
        <div className={styled.productContainer}>
            <div className="container-fluid">
                <div className="text-center">
                    <p className='fs-1 fw-bold p-2 text-dark'>Products</p>
                    <div className="p-2 bg-light d-flex align-items-center justify-content-around">
                        <div className="fs-4">
                            <i className={view == 'grid' ? "fa-solid fa-list text-danger px-2" : "fa-solid fa-list px-2"} onClick={() => setView('grid')}></i>
                            <i className={view == 'list' ? "fa-solid fa-barcode text-danger" : "fa-solid fa-barcode"} onClick={() => setView('list')}></i>
                        </div>
                        <p className="fw-bold fs-4 text-secondary">{filter.length} Products</p>
                        <select name="priceTag" className="fs-4" id="priceTag" onClick={(e) => priceFilter(e.target.value)}>
                            <option >Select Price</option>
                            <option value="Low to High">Low to High</option>
                            <option value="High to Low">High to Low</option>
                        </select>
                    </div>
                    <div className="row pt-4">
                        <div className="col-3 text-left">
                            <Filter />
                        </div>
                        <div className="col-9 text-center">
                            <div className={styled.viewBox}>
                                {
                                    view === 'grid' ?
                                        <Gridview products={filter} />
                                        :
                                        <ListView products={filter} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
