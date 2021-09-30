export const SET_DATA = 'SET_DATA';
export const ADD_DATA = "ADD_DATA";
export const SET_SEARCH_DATA = "SET_SEARCH_DATA";
export const ADD_SEARCH_DATA = "ADD_SEARCH_DATA";
export const SHOW_PRODUCTION_DATA = "SHOW_PRODUCTION_DATA";
export const SHOW_SORT_DATA = "SHOW_SORT_DATA";
export const SET_SEARCH_YEAR = "SET_SEARCH_YEAR";
export const SHOW_DATA_BY_YEAR = "SHOW_DATA_BY_YEAR";
export const SET_TRIP_DATA = "SET_TRIP_DATA";
export const ADD_TRIP_DATA = "ADD_TRIP_DATA";
export const SHOW_PROGRESS_DATA = "SHOW_PROGRESS_DATA";


export const setData = (payload) => ({ type: SET_DATA, payload: payload });
export const addData = (payload) => ({ type: ADD_DATA, payload: payload });
export const setSearchData = (payload) => ({ type: SET_SEARCH_DATA, payload: payload });
export const addSearchData = (payload) => ({ type: ADD_SEARCH_DATA, payload: payload });
export const showProductionData = (payload) => ({ type: SHOW_PRODUCTION_DATA, payload: payload });
export const showSortData = (payload) => ({ type: SHOW_SORT_DATA, payload: payload });
export const showDataByYear = (payload) => ({ type: SHOW_DATA_BY_YEAR, payload: payload });
export const setSearchYear = (payload) => ({ type: SET_SEARCH_YEAR, payload: payload });
export const setTripData = (payload) => ({ type: SET_TRIP_DATA, payload: payload });
export const addTripData = (payload) => ({ type: ADD_TRIP_DATA, payload: payload });
export const showProgressData = (payload) => ({ type: SHOW_PROGRESS_DATA, payload: payload });
