import React, {useState,useContext,useRef,useEffect} from 'react';
import './App.css';
import PreClicked from './components/PreClicked';
import Clicked from './components/Clicked';
import data from './data';
import SearchBar from './components/SearchBar';
import {Context} from "./context/Context";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)){
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};


function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [dataId, setDataId] = useState();
  const {contextData,setContextData} =useContext(Context);

  const onChange=(id)=>{
    if(isClicked!==true&&id!=="5"){
      setIsClicked(true);
      setDataId(id);
    }else if(id!=="5"){
      setIsClicked(false);
    }else{
      setIsClicked(false);
    }
    
  };
  let domNode = useClickOutside(() => {
    setIsClicked(false);
  });

  return (

    <div className="Main">
      <div>
        <SearchBar/>
      </div>
    <div className="App">
      {isClicked===false?contextData.map(a=>{
        return(
          <div>
          {a.id!=="5"?
          <div key={a.id} className="pre-click-div" onClick={()=>onChange(a.id)}>
            <PreClicked data={a}/>
            <button className="pre-click-btn" onClick={()=>onChange(a.id)}>
              Get Promo Code
              </button>
          </div>:
              <div key={a.id} className="pre-click-div" onClick={()=>onChange(a.id)}>
                <a href={a.link} target="_blank" rel="noreferrer" style={{textDecoration:"none",color:"black"}}>
              <PreClicked data={a}/>
              </a>
              <button className="pre-click-btn" onClick={()=>onChange(a.id)}>
              <a href={a.link} target="_blank" rel="noreferrer" style={{textDecoration:"none",color:"white"}}>
                Contact Us
              </a>
              </button>
              </div>}
          </div>
      )}):contextData.filter(elem=>elem.id===dataId).map(b=>{
        return(
          <div key={b.id} className="clicked-div" ref={domNode}>
            <button className="x-btn" onClick={()=>onChange()}>X</button>
            <Clicked data={b} />
          </div>
        )})}
    </div>
    </div>

  );
}

export default App;
