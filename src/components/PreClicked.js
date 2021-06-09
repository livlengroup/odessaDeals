import React from 'react';

export default function PreClicked({data}) {
    return (
            <div>
                <div className="business-preclick-img">
                <img className="business-preclick-img2" src={data.image} />
                </div>
                <h3>{data.name}</h3>
                
                <p className="preclick-desc">{data.discountDesc}</p>
            </div>
    )
}
