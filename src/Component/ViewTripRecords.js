import { useSelector } from "react-redux"
import { useHistory, useParams } from "react-router";

const ViewRecords = () => {
    const history = useHistory();
    const trip = useSelector((state) => state.tripData);
    const { id } = useParams();
    const onClickBack = () => {
        history.push('/viewlist')
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