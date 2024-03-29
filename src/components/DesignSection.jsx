import {designDataList} from '../data/designDataList'

export const DesignSection = () => {

    return (
        <section id="design-session" className="design-section">
            <h2 className="title">
                What is a Design Session ?
            </h2>
            <div className="design-step-container">
                {
                    designDataList?.map(item => {
                        return (
                            <div key={item?.id} className="design-wrapper">
                                <img src={item?.img} alt={item?.desc} />
                                <p className="step-desc">{item?.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
