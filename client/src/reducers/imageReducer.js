import { GET_IMAGE, GET_IMAGES, ADD_IMAGE, DELETE_IMAGE, UPDATE_IMAGE } from "./../actions/types"

//InitialState 
const initialState = {
    images: [
        {
            imageID: "abc",
            name: "Logo",
            price: "2000",
            seller: "Lee Khanh",
            size: "2000",
            uploadDate: "1/12/2018",
            originalImage: 'test.png',
            watermarkImage: 'test.png',
            idSeller: "#123"
        }
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_IMAGES:
            return {
                ...state
            }
        case DELETE_IMAGE:
            return {
                ...state,
                items: state.images.filter(item => item.idSeller !== action.payload)
            }
            case ADD_IMAGE:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        default:
            return state
    }
}