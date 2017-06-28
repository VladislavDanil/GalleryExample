import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import GalleryItem from '../components/GalleryItem'
import * as ratingAction from '../actions/RatingAction'

class Gallery extends Component {

    render() {

        const {changeRating} = this.props.ratingAction;

        const {images} = this.props;

        console.log(images);

        let items = images.map(function (image, index) {
            return (
                <GalleryItem key={index} image={image} changeRating={changeRating}/>
            )
        });

        return (
            <div className="gallery_container">
                {items}
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
