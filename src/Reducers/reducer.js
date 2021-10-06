import {
    SET_DATA, ADD_DATA, SET_SEARCH_DATA, ADD_SEARCH_DATA, SET_TRIP_DATA, SHOW_PRODUCTION_DATA, SHOW_DATA_BY_YEAR,
    SET_SEARCH_YEAR, ADD_TRIP_DATA, SHOW_SORT_DATA, SHOW_PROGRESS_DATA
} from "../Actions/action";

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
    tripData: [],
    count: [],
    progress: [],
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
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
        case SHOW_PROGRESS_DATA:
            console.log(action.payload);
            const a = action.payload.filter((data) => { return data.inlineRadioOptions.includes("No") })
            console.log(a);
            const data = a.map((data) => data.id);
            var iterator = data.values();
            let value = (iterator.next().value);
            console.log(value)
            return {
                ...state,
                vehicleData: state.vehicleData.filter((record) => {
                    return value.includes(record.id);
                })
            }
        case SHOW_SORT_DATA:
            const trip = JSON.parse(localStorage.getItem('trip'));
            let sort = trip.sort((a, b) => a.id - b.id);
            let x = sort.filter((data) => { return data.inlineRadioOptions.includes("Yes") })
            const getCompleteTrip = (arr, key) => {
                let arr2 = [];
                arr.forEach((x) => {
                    if (arr2.some((val) => { return val[key] == x[key] })) {
                        // If yes! then increase the occurrence by 1
                        arr2.forEach((k) => {
                            if (k[key] === x[key]) {
                                k["occurrence"]++
                            }
                        })
                    } else {
                        let a = {}
                        a[key] = x[key]
                        a["occurrence"] = 1
                        arr2.push(a);
                    }
                })
                return arr2
            }
            let key = "id"
            let result = getCompleteTrip(x, key)
            let count = result.sort((a, b) => {
                if (action.payload === "asc") return a.occurrence - b.occurrence
                if (action.payload === "desc") return b.occurrence - a.occurrence
                return 0;
            });
            const filterByReference = (arr1, arr2) => {
                let res = [];
                let d = arr2.map(data => data.id)
                for (let i = 0; i < arr1.length; i++) {
                    const { id } = arr1[i];
                    for (let j = 0; j < arr2.length; j++) {
                        if (d[j].includes(id)) {
                            res.push(arr1[j]);
                            console.log(res);
                        };
                    }
                };
                return res;
            }
            let sortedData = filterByReference(state.vehicleData, count)
            console.log(sortedData);
            return {
                ...state,
                vehicleData: sortedData
            }
        default:
            return state;
    }
}
export default reducer
