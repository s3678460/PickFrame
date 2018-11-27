import {GET_IMAGE, GET_IMAGES, ADD_IMAGE, DELETE_IMAGE, UPDATE_IMAGE} from "./../actions/types"

export const getImages = () =>{
    return{
        type: GET_IMAGES
    }
}

export const deleteImage = (id) =>{
    return{
        type: DELETE_IMAGE,
        payload: id
    }
}

export const addImage = (image) =>{
    return{
        type: ADD_IMAGE,
        payload: image
    }
}