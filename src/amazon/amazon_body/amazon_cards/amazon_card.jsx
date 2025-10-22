
import { useState, useEffect } from 'react';
import axios from "axios"
import './amazon_card.css';
import { Amazon_Card2 } from './amazon_card2';


export function Amazon_Card() {

    const [cardimg, setCardimg] = useState([])
    function getImages() {

        axios({
            method: 'get',
            url: "http://127.0.0.1:5050/images"
        })
            .then((res) => {
                setCardimg(res.data)
            })
    }
    useEffect(() => {
        getImages();

    }, [])


    return (

        <div className='d-flex flex-row flex-wrap'>

            {
                cardimg.map((item, index) => (

                    <div className='card m-3 text-center' id="cardid" key={index}>
                        <div className='card-header  fw-bold fs-4'>{item.title}</div>
                        <div className='card-img-top mt-2'><img src={item.img} className='card_img' /></div>
                        <div className='card-footer align-self-start'><a>See all offers</a></div>
                    </div>
                ))
            }
            <Amazon_Card2 />
        </div>

    )
}