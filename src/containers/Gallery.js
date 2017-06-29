import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import GalleryItem from '../components/GalleryItem'
import * as ratingAction from '../actions/RatingAction'

class Gallery extends Component {

    createGalleryItems = (images, changeRating) => {
        return images.map(function (image) {
            return (
                <GalleryItem key={image.id} image={image} changeRating={changeRating}/>
            )
        });
    };

    render() {
        const {changeRating} = this.props.ratingAction;
        const {images} = this.props;

        return (
            <div className="gallery_container">
                {this.createGalleryItems(images, changeRating)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        images: state.gallery.images
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ratingAction: bindActionCreators(ratingAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
