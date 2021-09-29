import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import { setSearchData, addSearchData, showProductionData, showDataByYear, setSearchYear } from "../Actions/action";

const ViewList = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const vehicle = useSelector((state) => state.vehicleData);
    const search = useSelector((state) => state.search);
    const year = useSelector((state) => state.year);
    console.log(vehicle);
    const onChangeSearch = (e) => {
        dispatch(setSearchData(e.target.value));
    }
    const onHandleSearch = (e) => {
        e.preventDefault()
        dispatch(addSearchData(search));
    }
    const onClickProdution = (e) => {
        e.preventDefault()
        dispatch(showProductionData(search));
    }
    const onChangeSearch2 = (e) => {
        console.log({ ...year, [e.target.name]: e.target.value })
        dispatch(setSearchYear({ ...year, [e.target.name]: e.target.value }));
    }
    const onClickYear = (e) => {
        e.preventDefault()
        dispatch(showDataByYear(year));
    }
    const onClickView = (id) => {
        history.push(`/viewRecords/${id}`)
    }
    const onClickAdd = (id) => {
        history.push(`/addtrip/${id}`)
    }
    return (
        <div className="App">
            <nav className="navbar navbar-light bg-light" >
                <div className="container-fluid">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => onChangeSearch(e)} />
                        <button className="btn btn-outline-success" type="submit" onClick={onHandleSearch}>Search</button>
                        <button className="btn btn-outline-success" type="submit" onClick={onClickProdution} >Production</button>
                    </form>
                    <form className="d-flex">
                        <input className="form-control me-2" type="text" placeholder="start year" aria-label="Search" name="start" onChange={(e) => onChangeSearch2(e)} />
                        <input className="form-control me-2" type="text" placeholder="end year" aria-label="Search" name="end" onChange={(e) => onChangeSearch2(e)} />
                        <button className="btn btn-outline-success" type="submit" onClick={onClickYear}>Search</button>
                    </form>
                </div>
            </nav>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Wheels</th>
                        <th scope="col">Production</th>
                        <th scope="col">Model name</th>
                        <th scope="col">Model year</th>
                        <th scope="col">last date of services</th>
                        <th scope="col">Records</th>
                        <th scope="col">Add Trip</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vehicle.map((record) => {
                            return (
                                <tr key={record.id}>
                                    <td>{record.inlineRadioOptions}</td>
                                    <td>{record.production}</td>
                                    <td>{record.name}</td>
                                    <td> {record.year}</td>
                                    <td> {record.date}</td>
                                    <td> <button type="submit" className="btn btn-secondary" onClick={() => onClickView(record.id)} >View</button></td>
                                    <td> <button type="submit" className="btn btn-secondary" onClick={() => onClickAdd(record.id)} >Add </button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ViewList