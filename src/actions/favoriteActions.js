export const TOGGLE_FAVORITE_MOVIES = "TOGGLE_FAVORITE_MOVIES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";

export function toggleFavorites() {
    return {type: TOGGLE_FAVORITE_MOVIES}
}

export function addFavorite(newMovie) {
    return {type: ADD_FAVORITE, payload: newMovie}
}

export function deleteFavorite(id) {
    return {type: DELETE_FAVORITE, payload: id}
}