import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router";
import { showSortData} from "../Actions/action";

const ViewRecords = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const trip = useSelector((state) => state.tripData);
    const number = useSelector((state) => state.count);
    console.log(number)
    const { id } = useParams();
    // console.log(id);
    const onClickBack = () => {
        history.push('/viewlist')
    }
    let count = 0;
    const complete = (record) => {
        if (record === "Yes") {
            count++;
            console.log(count)
            dispatch(showSortData(count))
        } else {
            // dispatch(inProgressData(id))
        }
    }
    return (
        <div className="App">
            <h2>Trip Details</h2><br /><br />
            <div className='item-container'>
                {
                    trip.map(record => (
                        record.id === id ?
                            < div className='card' key={record} >
                                <h3>Details</h3>
                                <p>source : {record.source}</p>
                                <p>destination : {record.destination}</p>
                                <p>start : {record.sDate}</p>
                                <p>end : {record.eDate}</p>
                                <p>completed : {record.inlineRadioOptions}</p>
                                {complete(record.inlineRadioOptions)}
                            </div>
                            : ""
                    ))
                }
            </div><br />
            <button type="submit" className="btn btn-secondary" onClick={() => onClickBack()}>Back</button>

        </div >
    )
}
export default ViewRecords