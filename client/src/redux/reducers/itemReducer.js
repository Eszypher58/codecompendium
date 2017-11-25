import axios from "axios";

const data = {}

console.log("before axios call");
axios.get("/api/save_entity").then(res => {

    console.log(res.data);
    initialState.itemArray = res.data;


})
console.log("after axios call");

const initialState = {

    itemArray: [],
    fetching: false,
    fetched: false,
    error: null,

    //get data gfrom database

}

export default function reducer(state=initialState, action) {

    switch (action.type) {
        case "FETCH_ITEM_ARRAY_FULFILLED": {

            return {
                ...state,
                fetching: false,
                fetched: true,
                itemArray: action.payload,

            }

        }



    }

    return state



}