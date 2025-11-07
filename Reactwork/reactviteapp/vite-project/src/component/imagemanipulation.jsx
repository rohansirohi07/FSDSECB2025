import React,{ useState } from 'react'
import cat from './WhatsApp Image 2025-11-07 at 09.47.09.jpeg'

function imageManipulation() {
    const[imgHeight,setImgHeight]=useState(200);
    const[imgWidth,setImgWidth]=useState(200);
    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);
    const[imgAngle,setImageAngle]=useState(0);

    function increaseHeight(){
        setImgHeight(imgHeight+10);
    }
     function decreaseHeight(){
        setImgHeight(imgHeight-10);
    }
    function changeBGColor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
    }
    function imageRotate(){
        setImageAngle(imgAngle+30);
    }

    return (
        <div >
            <h2>ImageManipulation</h2>
            <div style={{border:'1px solid green',height:'450px', width:'350px', margin:' 0px auto'}}>
                <img src={cat} height={imgHeight} width={imgWidth} alt='cat image' style={{paddingTop:'70px',paddingLeft:'70px',backgroundColor:`rgb(${red},${green},${blue})`,transform :`rotate(${imgAngle}deg)`}}/>
            </div>
            <div>
                <button onClick={increaseHeight}>Increase Height</button>
                <button onClick={decreaseHeight}>Decrease Height</button>
                <button onClick={()=>setImgWidth(imgWidth+10)}>Increase Width</button>
                <button onClick={()=>setImgWidth(imgWidth-10)}>Decrease Width</button>
                <button onClick={changeBGColor}>ChangeBGColor</button>
                <button onClick={imageRotate}>Rotate Image</button>
            </div>
            <div>
                <h2 style={{color:'black',backgroundColor:'pink'}}>Image Height:{imgHeight}</h2>
                 <h2 style={{color:'black',backgroundColor:'pink'}}>Image Width:{imgWidth}</h2>
            </div>

        </div>
    )
}
export default imageManipulation