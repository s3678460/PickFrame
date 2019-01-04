import {
    GET_IMAGE,
    GET_IMAGES,
    GET_USER_IMAGES,
    ADD_IMAGE,
    DELETE_IMAGE,
    UPDATE_IMAGE,
    GET_ERRORS,
    RESET_IMAGES
} from "./../actions/types"
import axios from "axios"


export const getUserImages = () => dispatch => {
    axios
        .get('/api/images/userimage')
        .then(res => dispatch({
            type: GET_USER_IMAGES,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
        )
}
export const getImages = () => dispatch => {
    axios
        .get('/api/images/all')
        .then(res => dispatch({
            type: GET_IMAGES,
            payload: res.data
        }))
}

export const getImage = (id) => dispatch => {
    axios
        .get(`/api/images/${id}`)
        .then(res => dispatch({
            type: GET_IMAGE,
            payload: res.data
        }))
}

export const deleteImage = (id, originalImage) => dispatch => {
    axios
        .delete(`/api/images/${id}`)
        .then(res => dispatch({
            type: DELETE_IMAGE,
            payload: id
        }))
        .then(res => {
            var deletedImage = {
                imageLink: originalImage
            }
            axios.post("/api/images/deleteimage", deletedImage)
        })
        .then(res => dispatch(getUserImages()))
}

export const addImage = (newImage, newFile) => dispatch => {
    axios
        .post("/api/images", newImage)
        .then(res => dispatch({
            type: ADD_IMAGE,
            payload: res.data
        }))
        .then(res => dispatch({
            type: GET_ERRORS,
            payload: {}
        }))
        .then(res => {
            if (newFile) {
                const fd = new FormData()
                fd.append('uploadimage', newFile, newImage.originalImage);
                axios.post(`/api/images/uploadimage`, fd)
                    .then(res => {
                        window.alert("Submit successful! Your image will be examined and approved within 24 hours.")
                    })
                    .catch(err => console.log(err))
            }
        })
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}
export const updateImage = (newImage) => dispatch => {
    axios
        .post("/api/images", newImage)
        .then(res => dispatch({
            type: UPDATE_IMAGE,
            payload: res.data
        }))
        .then(res => dispatch(getUserImages()))
        .then(res => dispatch({
            type: GET_ERRORS,
            payload: {}
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}
export const resetImages = () => dispatch => {
    dispatch({
        type: RESET_IMAGES,
        payload: []
    })
    dispatch({
        type: GET_ERRORS,
        payload: {}
    })
}
