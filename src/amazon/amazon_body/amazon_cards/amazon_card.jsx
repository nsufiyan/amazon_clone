
import { useState } from 'react';
import './amazon_card.css';
import { Amazon_Card2 } from './amazon_card2';

export function Amazon_Card(){

 const[cardimg,setCardimg]=useState([{
   title:"save upto 80% on mobile phone",
   img:'card_images/mobile.jpg'
 },

{title:"Up to 70% off | Truly wireless earbuds",
   img:'card_images/headphone.jpg'
},

{title:"Up to 65% off | International brands",
   img:'card_images/headphone.2jpg.jpg'
},
{
title:'Up to 75% off | Amazon Renewed',
img:'card_images/laptop.jpg'
}
]);
 
    return(

        <div className='d-flex flex-row flex-wrap'>
            
              {
               cardimg.map((item)=>(
               
               <div className='card m-3 text-center' id="cardid">
                   <div className='card-header  fw-bold fs-4'>{item.title}</div>
                   <div className='card-img-top mt-2'><img src={item.img} className='card_img'/></div>
                   <div className='card-footer align-self-start'><a href='#'>See all offers</a></div>
               </div>
               ))
            }
        <Amazon_Card2/>
        </div>

    )
}