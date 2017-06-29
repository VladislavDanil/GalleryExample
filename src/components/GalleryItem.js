import React, {PropTypes, Component} from 'react';

export default class GalleryItem extends Component {

    static propTypes = {
        image: React.PropTypes.object.isRequired,
        changeRating: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.img = new Image();
    }

    componentDidMount() {
        this.img.src = this.props.image.src;
    }

    createMoveStyle = () => {
        return {
            transform: 'translate3d(' + this.props.image.coordinate[0] + 'px,' + this.props.image.coordinate[1] + 'px,0)',
            transition: 'transform 2s'
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

        return (
            <div className="gallery_item" style={this.createMoveStyle()} onClick={this.onClick}
                 onContextMenu={this.handleContextMenu}>
                <div className="rating">{image.rating}</div>
                <div className="image" style={{
                    backgroundImage: "url('"+image.src+"')"
                }}></div>
            </div>
        );
    }
}
