import {CHANGE_RATING} from '../constants/Constants'

const initialState = {
    images: [
        {
            id: 0,
            src: 'http://wowslider.com/sliders/demo-93/data1/images/sunset.jpg',
            rating: 0
        },
        {
            id: 1,
            src: 'http://wowslider.com/sliders/demo-93/data1/images/lake.jpg',
            rating: 0
        },
        {
            id: 2,
            src: 'http://wowslider.com/sliders/demo-93/data1/images/landscape.jpg',
            rating: 0
        },
        {
            id: 3,
            src: 'http://janetroper.com/wp-content/uploads/2014/04/prairie-pic-825x350.jpg',
            rating: 0
        },
        {
            id: 4,
            src: 'http://millionstatusov.ru/pic/statpic/all/58e61335ec518.jpg',
            rating: 0
        }
    ]
};

export default function gallery(state = initialState, action) {

    switch (action.type) {
        case CHANGE_RATING:
            return {...state, images: changeRating(getCloneArray(state.images), action.imageId, action.count)};
        default:
            return {...state, images: countNewCoordinate(getCloneArray(state.images))};
    }

    function getCloneArray(array) {
        return array.slice(0);
    }

    function changeRating(images, id, count) {
        images.forEach((image)=> {
            if (image.id == id) {
                if (!(image == 0 && count < 0)) {
                    image.rating = image.rating + count;
                }
            }
        });
        return countNewCoordinate(sortGallery(images));
    }

    function sortGallery(images) {
        return images.sort(function (imageA, imageB) {
            if (imageA.rating < imageB.rating) {
                return 1;
            }
            if (imageA.rating > imageB.rating) {
                return -1;
            }
            return 0;
        });
    }

    function countNewCoordinate(images) {
        let x = 0;
        let y = 0;

        images.forEach((image, index)=> {
            if (index != 0 && index % 3 == 0) {
                x = 0;
                y = y + 300;
                image.coordinate = [x, y];
                x = x + 300;
            } else {
                image.coordinate = [x, y];
                x = x + 300;
            }
        });
        return images;
    }
}
