import { GET_IMAGE, GET_IMAGES, ADD_IMAGE, DELETE_IMAGE, UPDATE_IMAGE } from "./../actions/types"
import axios from "axios"


export const getImages = () => dispatch => {
    axios
        .get('/api/images')
        .then(res => dispatch({
            type: GET_IMAGES,
            payload: res.data
        }))
}

export const deleteImage = (id) => dispatch => {
    axios
    .delete(`/api/images/${id}`)
    .then(res => dispatch({
        type: DELETE_IMAGE,
        payload: id
    }))
}

export const addImage = (newImage) => dispatch => {
    axios
        .post("/api/images", newImage)
        .then(res => dispatch({
            type: ADD_IMAGE,
            payload: res.data
        }))
}
