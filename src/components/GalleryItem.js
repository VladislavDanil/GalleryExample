import React, {PropTypes, Component} from 'react';

export default class GalleryItem extends Component {

    static propTypes = {
        image: React.PropTypes.object.isRequired,
        changeRating: React.PropTypes.func.isRequired
    };

    createMoveStyle = () => {
        return {
            transform: 'translate3d(' + this.props.image.coordinate[0] + 'px,' + this.props.image.coordinate[1] + 'px,0)',
            transition: 'transform 5s'
        }
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
        let moveStyle = this.createMoveStyle();

        return (
            <div className="gallery_item" style={moveStyle} onClick={this.onClick}
                 onContextMenu={this.handleContextMenu}>
                <div className="rating">{image.rating}</div>
                <img className="image" src={image.src}/>
            </div>
        );
    }
}
