import { gallyList } from "../data/imageGalleryList"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RightArrow from "../assets/images/general/arrow-right.png"
import LeftArrow from "../assets/images/general/arrow-left.png"

export const HorizontalCarousel = () => {

    const PrevArrow = (props) =>{
        const { className, style, onClick } = props;
        return(
            <button 
                className={[className, "gallery-prev-arrow-btn"].join(' ')} 
                onClick={onClick}
                style={{ ...style, display: "block", background: "red" }}

            >
                <img src={LeftArrow} alt="" />
            </button> 
        )
    }

    const NextArrow = (props) =>{
        const { className, style, onClick } = props;
        return (
            <button 
                className={[className, "gallery-next-arrow-btn"].join(' ')} 
                onClick={onClick}
                // style={{ ...style, display: "block", background: "red" }}

            >
                <img src={RightArrow} alt="" />
            </button>
        );
    }


    var settings = {
        // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };


    return (
        <section id="gallery" className="gallery-section">
            <div className="gallery-section-wrapper">
                {
                    gallyList?.map(item => {
                        return (
                            <div key={item?.id} className="gallery-container">
                                <h3 className="gallery-heading">{item?.heading}</h3>
                                <div className="image-wrapper">
                                    <Slider {...settings}>
                                    {
                                        item?.images?.map(each => {
                                            return (
                                                <div key={each?.id} className="spacing-div">
                                                    <div key={each?.id} className="image-container" >
                                                        <img src={each?.img} alt={each?.desc} className="gallery-img" />
                                                        <span className="description-box">{each?.desc}</span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    </Slider>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
