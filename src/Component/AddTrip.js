import { useDispatch, useSelector } from "react-redux";
import { setTripData, addTripData } from "../Actions/action";
import { useHistory, useParams } from "react-router";

const AddTrip = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const trip = useSelector((state) => state.trip);
    // console.log(trip.inlineRadioOptions)
    const { id } = useParams()

    const onChangeInput = (e) => {
        dispatch(setTripData({ ...trip, [e.target.name]: e.target.value, id }));
    }
    const onHandleClick = (e) => {
        e.preventDefault()
        dispatch(addTripData(trip));
    }
    const onClickBack = () => {
        history.push('/viewlist')
    }
    return (
        <div className="App">
            <div className="container">
                <form >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Source</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="source" aria-describedby="emailHelp" placeholder="Enter source" onChange={(e) => onChangeInput(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Destination</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" name="destination" placeholder="destination" onChange={(e) => onChangeInput(e)} />
                    </div><br />
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Trip completed: </label>{" "}
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="No" onChange={(e) => onChangeInput(e)} />
                            <label className="form-check-label" htmlFor="inlineRadio1">No</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Yes" onChange={(e) => onChangeInput(e)} />
                            <label className="form-check-label" htmlFor="inlineRadio2">Yes</label>
                        </div>
                        {
                            trip.inlineRadioOptions === "Yes" ? (
                                <tr><br />
                                    <div style ={{display:"inline-flex"}}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Start date</label>
                                            <input type="date" className="form-control" id="exampleInputPassword1" name="sDate" placeholder="start date" onChange={(e) => onChangeInput(e)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">End date</label>
                                            <input type="date" className="form-control" id="exampleInputPassword1" name="eDate" placeholder="end date" onChange={(e) => onChangeInput(e)} />
                                        </div>
                                    </div>
                                </tr>
                            ) : (
                                <>
                                    <div className="form-group"><br />
                                        <label htmlFor="exampleInputPassword1">Start date</label>
                                        <input type="date" className="form-control" id="exampleInputPassword1" name="sDate" placeholder="start date" onChange={(e) => onChangeInput(e)} />
                                    </div>
                                </>
                            )
                        }
                    </div><br />
                    <button type="submit" className="btn btn-secondary" onClick={onHandleClick}>Add Trip</button>
                </form>
            </div><br /><br />
            <button type="submit" className="btn btn-secondary" onClick={() => onClickBack()}>Back</button>
        </div>
    )
}
export default AddTrip;