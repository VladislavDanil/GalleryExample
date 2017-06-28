import React, {PropTypes, Component} from 'react';

export default class GalleryItem extends Component {

    static propTypes = {
        image: React.PropTypes.object.isRequired,
        changeRating: React.PropTypes.func.isRequired
    };

    onClick = () => {
        this.props.changeRating(this.props.image.id, 1);
    };

    handleContextMenu = (e) => {
        e.preventDefault();
        this.props.changeRating(this.props.image.id, -1);
    };

    render() {
        let image = this.props.image;
        let moveStyle = {
            transform: 'translate3d(' + image.coordinate[0] + 'px,' + image.coordinate[1] + 'px,0)',
            transition: 'transform 5s'
        };

        return (
            <div className="gallery_item" style={moveStyle} onClick={this.onClick}
                 onContextMenu={this.handleContextMenu}>
                <div className="rating">{image.rating}</div>
                <img className="image" src={image.src}/>
            </div>
        );
    }
}
