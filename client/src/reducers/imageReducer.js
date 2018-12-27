import { GET_IMAGE, GET_IMAGES, ADD_IMAGE, DELETE_IMAGE, UPDATE_IMAGE, GET_USER_IMAGES, RESET_IMAGES } from "./../actions/types"

//InitialState
function initialState() {
    if (localStorage.currentDeatil) {
        const currentDeatil = JSON.parse(localStorage.currentDeatil)
        return {
            images: [currentDeatil]
        }
    } else {
        return {
            images: []
        }
    }
}
// const initialState = {
//     images: []
// }


export default function (state = initialState(), action) {
    switch (action.type) {
        case GET_IMAGES:
            return {
                ...state,
                images: action.payload
            }
        case GET_IMAGE:
            return {
                ...state,
                images: action.payload
            }
        case GET_USER_IMAGES:
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
        case UPDATE_IMAGE:
            return {
                ...state,
                images: [action.payload, ...state.images]
            }
        case RESET_IMAGES:
            return {
                ...state,
                images: action.payload
            }
        default:
            return state
    }
}