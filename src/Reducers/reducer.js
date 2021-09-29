import { SET_DATA, ADD_DATA, SET_SEARCH_DATA, ADD_SEARCH_DATA, SET_TRIP_DATA, SHOW_PRODUCTION_DATA, SHOW_DATA_BY_YEAR, SET_SEARCH_YEAR, ADD_TRIP_DATA } from "../Actions/action";

const initialState = {
    data: {
        production: '',
        name: '',
        year: '',
        date: '',
    },
    vehicleData: [],
    search: '',
    searchData: '',
    trip: {
        source: '',
        destination: '',
        sDate: '',
        eDate: '',
        inlineRadioOptions: ''
    },
    year: {
        start: '',
        end: ''
    },
    tripData: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            console.log(action.payload);
            return {
                ...state,
                data: action.payload,
            }
        case ADD_DATA:
            const vehicleData = [...state.vehicleData, action.payload];
            localStorage.setItem('vehicle', JSON.stringify(vehicleData));
            return {
                ...state,
                vehicleData,
                data: initialState.data,
            }
        case SET_SEARCH_DATA:
            return {
                ...state,
                search: action.payload
            }
        case ADD_SEARCH_DATA:
            const wheels = JSON.parse(localStorage.getItem('vehicle'));
            return {
                ...state,
                vehicleData: wheels.filter((record) => record.inlineRadioOptions === action.payload),
            }
        case SHOW_PRODUCTION_DATA:
            const production = JSON.parse(localStorage.getItem('vehicle'));
            return {
                ...state,
                vehicleData: production.filter((record) => record.production === action.payload)
            }
        case SET_SEARCH_YEAR:
            console.log(action.payload)
            return {
                ...state,
                year: action.payload
            }
        case SHOW_DATA_BY_YEAR:
            console.log(action.payload.start)
            const year = JSON.parse(localStorage.getItem('vehicle'));
            return {
                ...state,
                vehicleData: year.filter((record) => record.year >= action.payload.start && record.year <= action.payload.end)
            }
        case SET_TRIP_DATA:
            console.log(action.payload);
            return {
                ...state,
                trip: action.payload,
            }
        case ADD_TRIP_DATA:
            const tripData = [...state.tripData, action.payload];
            localStorage.setItem('trip', JSON.stringify(tripData));
            return {
                ...state,
                tripData,
                trip: initialState.trip,
            }
        default:
            return state;
    }
}
export default reducer
