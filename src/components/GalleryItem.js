import React, {PropTypes, Component} from 'react'

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
        console.log("Draw gallery item");

        return (
            <div className="gallery_item" onClick={this.onClick} onContextMenu={this.handleContextMenu}>
                <div className="rating">{image.rating}</div>
                <img className="image" src={image.src}/>
            </div>
        );
    }
}
