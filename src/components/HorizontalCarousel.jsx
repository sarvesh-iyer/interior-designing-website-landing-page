import { gallyList } from "../data/imageGalleryList"

export const HorizontalCarousel = () => {


    return (
        <section className="gallery-section">
            {
                gallyList?.map(item => {
                    return (
                        <div key={item?.id} className="gallery-container">
                            <h3 className="gallery-heading">{item?.heading}</h3>
                            <div className="image-wrapper">
                                {
                                    item?.images?.map(each => {
                                        return (
                                            <div key={each?.id} className="image-container" >
                                                <img src={each?.img} alt={each?.desc} className="gallery-img" />
                                                <span className="description-box">{each?.desc}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}
