import { useDispatch, useSelector } from "react-redux";
import { setData, addData } from "../Actions/action";
const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data)
    const onChangeValue = (e) => {
        dispatch(setData({ ...data, [e.target.name]: e.target.value }));
    }
    const onHandleClick = (e) => {
        e.preventDefault()
        dispatch(addData({ ...data, id: new Date().getTime() }));
    }
    return (
        <div className="App">
            <div className="container">
                <form onSubmit={onHandleClick}>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="two" onChange={(e) => onChangeValue(e)} />
                        <label className="form-check-label" htmlFor="inlineRadio1">Two Wheeler</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="three" onChange={(e) => onChangeValue(e)} />
                        <label className="form-check-label" htmlFor="inlineRadio2">Three Wheeler</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="four" onChange={(e) => onChangeValue(e)} />
                        <label className="form-check-label" htmlFor="inlineRadio3">Four Wheeler</label>
                    </div>
                    <div className="form-group"><br/>
                        <label htmlFor="exampleInputEmail1">Production Company</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="production" aria-describedby="emailHelp" placeholder="Enter production" onChange={(e) => onChangeValue(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1"> Model name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" name="name" placeholder=" model name" onChange={(e) => onChangeValue(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1"> Model year</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" name="year" placeholder=" model year" onChange={(e) => onChangeValue(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1"> Last date of service </label>
                        <input type="date" className="form-control" id="exampleInputPassword1" name="date" placeholder="last date of service." onChange={(e) => onChangeValue(e)} />
                    </div><br />
                    <button type="submit" className="btn btn-secondary" >Add Vehicle</button>
                </form>
            </div>
        </div>
    )
}
export default Home;