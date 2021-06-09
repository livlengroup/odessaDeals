import React from 'react';

export default function Clicked({data}) {
    return (
    <div className="clicked-main-div">
        <div className="clicked-img-div">
        <a href={data.link} target="_blank">
            <img className="business-clicked-img" src={data.image} />
            </a>
        </div>
        <div className="clicked-desc-div">
            <h2>{data.name}</h2>
        <div className="clicked-desc">
            <p>{data.discountDesc}</p>
            <p>{data.desc2}</p>
            <p>{data.address}</p>
            <p>Promo Code: <span className="promo-code"><strong>{data.desc}</strong></span> <span style={{fontSize:"10px",marginLeft:"10px"}}>*Mention at checkout!</span></p>
            
            <br/>
            <button className="website-btn">
                <a href={data.link} target="_blank" rel="noreferrer" style={{textDecoration:"none",color:"white"}}>
                    Visit Website <span>&#8594;</span>
                    </a></button>
        </div>
        </div>
    </div>
    )
}
