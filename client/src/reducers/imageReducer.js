import { GET_IMAGE, GET_IMAGES, ADD_IMAGE, DELETE_IMAGE, UPDATE_IMAGE } from "./../actions/types"

//InitialState 
const initialState = {
    images: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_IMAGES:
            return {
                ...state,
                images: action.payload
            }
        case DELETE_IMAGE:
            return {
                ...state,
                images: state.images.filter(image => image._id !== action.payload)
            }
        case ADD_IMAGE:
            return {
                ...state,
                images: [action.payload, ...state.images]
            }
        default:
            return state
    }
}