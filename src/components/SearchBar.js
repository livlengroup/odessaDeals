import React,{useState,useContext} from 'react';
import {Context} from '../context/Context';
import data from '../data';

export default function SearchBar() {
    const [isActive,setIsActive] = useState(false);
    const [btnId,setBtnId] = useState(1);
    const {contextData,setContextData} =useContext(Context);

    const buttonNames = [
        {id:1,name:'All',tags:"all"},
        {id:2,name:'Eat & Drink',tags:"eat"},
        {id:3,name:'Business',tags:"business"},
        {id:4,name:'Home',tags:"home"},
        {id:5,name:'Kids',tags:"kids"},
    ];

    const handleClick =(id,tags)=>{
        setBtnId(id);
        if(tags==="all"){
            setContextData(data);
        }else{
            setContextData(data.filter(click=>click.tags===tags));
        }
    };

    return (
        <div className="searchbar-main-div">
            <h3 className="searchbar-h3">SELECT A CATEGORY</h3>
            <div className="searchbar-btn-group" >
                {buttonNames.map(key =>
                    {return(<button className={key.id===btnId?"searchbar-btn":"searchbar-btn active"}
                    onClick={()=>handleClick(key.id,key.tags)}>{key.name}</button>)})}
                
            </div>
        </div>
    )
}
