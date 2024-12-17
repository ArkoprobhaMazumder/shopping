import { useFilterContext } from "../../context/FilterContext";

const Filter = () => {
    const { categoryFilter, comapanyFilter } = useFilterContext();

    return (
        <>
            <h2>Filter List</h2>
            <div className="my-4">
                <h3 className="my-3">Category</h3>
                <ul className="list-group">
                    <li className="list-group-item" onClick={() => categoryFilter('all')}>All</li>
                    <li className="list-group-item" onClick={() => categoryFilter('mobile')}>Mobile</li>
                    <li className="list-group-item" onClick={() => categoryFilter('laptop')}>Laptop</li>
                    <li className="list-group-item" onClick={() => categoryFilter('computer')}>Computer</li>
                    <li className="list-group-item" onClick={() => categoryFilter('accessories')}>Accesries</li>
                    <li className="list-group-item" onClick={() => categoryFilter('watch')}>Watch</li>
                </ul>
                <h3 className="my-3">Company</h3>
                <select name="company" className="p-2" id="company" onClick={(e) => comapanyFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="apple">Apple</option>
                    <option value="samsung">Samsung</option>
                    <option value="dell">Dell</option>
                    <option value="nokia">Nokia</option>
                </select>
            </div>
        </>
    )
}

export default Filter
