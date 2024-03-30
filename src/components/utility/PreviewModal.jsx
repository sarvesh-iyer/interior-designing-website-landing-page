import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

export const PreviewModal = (props) => {

    let {isVisible, setIsVisible, selectedItem} = props

    let modalImgStyle = {
        backgroundImage: `url(${selectedItem.current?.image})`,
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%', 
    }

    return (
        <Rodal 
            className="rodal-wrapper"
            visible={isVisible} 
            onClose={() => setIsVisible(false)}
            closeOnEsc={true}
        >
            <div className="modal-container">
                <div className="modal-head">
                    <h3 className="title">{selectedItem.current?.desc}</h3>    
                </div>
                <div className="modal-image-container" style={modalImgStyle}>
                </div>
            </div>
        </Rodal>
    )
}
