import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import SuccessImg from '../../assets/images/general/success.gif'

export const SuccessModal = (props) => {
    let {isVisible, setIsVisible} = props

    return (
        <Rodal 
            className="rodal-wrapper"
            
            visible={isVisible} 
            onClose={() => setIsVisible(false)}
            closeOnEsc={true}
        >
            <div className="success-body">
                <h1 className="title">Successfully submitted</h1>
                <img src={SuccessImg} width={100} alt="" />
            </div>
            
        </Rodal>
    )
}
