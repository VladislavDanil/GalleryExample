import {CHANGE_RATING} from '../constants/Constants'

export function changeRating(imageId, count) {

    return {
        type: CHANGE_RATING,
        imageId: imageId,
        count: count
    }
}
