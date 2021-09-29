import { useSelector } from "react-redux"

const ViewRecords = () => {
    const trip = useSelector((state) => state.tripData)
    return (
        <div className="App">
            <h2>Trip Details</h2><br /><br />
            <div className='item-container'>
                {
                    trip.map(record => (
                        <div className='card' key={record.id} >
                            <h3>{record.source}</h3>
                            <p>{record.destination}</p>
                            <p>{record.sDate}</p>
                            <p>{record.eDate}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
export default ViewRecords