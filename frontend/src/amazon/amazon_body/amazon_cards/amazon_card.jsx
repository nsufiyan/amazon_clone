
import { useState, useEffect } from 'react';
import axios from "axios"
import './amazon_card.css';
import { Amazon_Card2 } from './amazon_card2';
import { useNavigate } from 'react-router-dom';



export function Amazon_Card() {
    const navigate = useNavigate()
    const userData = JSON.parse(localStorage.getItem("userData"))
    const [cardimg, setCardimg] = useState([])
    function getImages() {

        axios({
            method: 'get',
            url: "http://localhost:5050/api/images"
        })
            .then((res) => {
                setCardimg(res.data)
            })
            .catch((err) => {
                if (err) {
                    navigate("/server-error")
                    console.log(err)
                }

            })
    }

    useEffect(() => {

        if (userData) {
            getImages();
        }


    }, [])

    return (


        <div className='d-flex flex-row flex-wrap ms-5'>

            {userData ?
                cardimg.map((item, index) => (

                    <div className='card m-3 text-center' id="cardid" key={index}>
                        <div className='card-header  fw-bold fs-4'>{item.title}</div>
                        <div className='card-img-top mt-2 mb-2 '><img src={item.image} className='card_img' alt={item.title} /></div>
                        <div className='card-footer align-self-start'><a>See all offers</a></div>
                    </div>
                ))
                : <div></div>
            }
            < Amazon_Card2 />
        </div >


    )
}  