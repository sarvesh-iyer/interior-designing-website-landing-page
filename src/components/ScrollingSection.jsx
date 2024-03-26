import React from 'react'
import { InfiniteLooper } from './InfiniteLooper'
import Img1 from '../assets/images/img1.png'
import Img2 from '../assets/images/img2.png'
import Img3 from '../assets/images/img3.png'
import Img4 from '../assets/images/img4.png'
import Img5 from '../assets/images/img5.png'
import Img6 from '../assets/images/img6.png'
import Img7 from '../assets/images/img7.png'

export const ScrollingSection = () => {
    
    let list = [
        {
            id: 1,
            img: Img1
        },
        {
            id: 2,
            img: Img2
        },
        {
            id: 3,
            img: Img3
        },
        {
            id: 4,
            img: Img4
        },
        {
            id: 5,
            img: Img5
        },
        {
            id: 6,
            img: Img6
        },
        {
            id: 7,
            img: Img7
        },
    ]

    return (
        <section className="looping-section">
            <h2 className='title'>Why Choose us</h2>
            <div className="looping-div">
                <InfiniteLooper direction="left" speed="9" >
                    {list?.map(item => {
                        return (
                            <div key={item.id}>
                                <img src={item.img} alt="" />
                            </div>
                        )
                    })}
                </InfiniteLooper>
            </div>
        </section>
    )
}
