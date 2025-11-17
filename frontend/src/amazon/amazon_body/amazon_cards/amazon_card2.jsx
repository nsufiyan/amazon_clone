

import { useState } from 'react';
export function Amazon_Card2() {

    const [need, setNeed] = useState([
        'shortCard_images/Calling.png', 'shortCard_images/workout.png', 'shortCard_images/movie.png', 'shortCard_images/Gaming.png'
    ]);

    const [color, setColor] = useState([
        'shortCard_images/Green.png', 'shortCard_images/White.png', 'shortCard_images/red.png', 'shortCard_images/Beautiful_Blues.png'
    ]);


    return (
        <div>

            <h3 className='text-center  fw-bold mt-2 mb-1'>Shop by Need</h3>
            {
                need.map((item, index) => (
                    <img src={item} style={{ width: "400px" }} key={index} />
                ))
            }
            <h3 className='text-center mb-1 fw-bold mt-4 mb-1'>Shop by Color</h3>
            {
                color.map((item, index) => (
                    <img src={item} style={{ width: "400px" }} key={index} />
                ))
            }
        </div>
    )
}