import { useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

export const PreviewModal = (props) => {

    const [showFullImage, setShowFullImage] = useState(false)

    let {isVisible, setIsVisible, selectedItem} = props

    let modalImgStyle = {
        backgroundImage: `url(${selectedItem.current?.image})`,
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: !showFullImage ? 'cover' : 'contain',
        width: '100%', 
    }

    const onRodalClose = () => {
        setIsVisible(false) 
        setShowFullImage(false)
    } 

    return (
        <Rodal 
            className="img-preview-rodal"
            visible={isVisible} 
            onClose={onRodalClose}
            closeOnEsc={true}
        >
            <div className="modal-container">
                <div className="preview-modal-head">
                    <h3 className="title">{selectedItem.current?.desc}</h3>
                </div>
                <div className="modal-image-container" style={modalImgStyle}>
                </div>
                <div className="view-switcher">
                    <label htmlFor="switcher" className="switcher-label">Show full image</label>
                    <input 
                        className="toggle" 
                        type="checkbox"
                        id="switcher"
                        checked={showFullImage}
                        onChange={() => setShowFullImage(!showFullImage)} 
                    />  
                </div>
            </div>
        </Rodal>
    )
}
