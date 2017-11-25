import axios from "axios";

export function fetchDB() {

    return function(dispatch) {

        axios.get("/save_entity").then((res) => {

            dispatch({

                type: "FETCH_ITEM_ARRAY_FULFILLED",
                payload: res.data,

            })

        }).catch((err) => {

            dispatch({
                
                type: "FETCH_ITEM_ARRAY_REJECTED",
                payload: err,
                
            })

        })

    }

}

export function addBookMark() {

    return {

        type: "ADD_BOOKMARK",
        payload: {

        }

    }


}

export function removeBookMark() {
    
    return {
    
        type: "REMOVE_BOOKMARK",
        payload: {
    
        }
    
    }  
    
}