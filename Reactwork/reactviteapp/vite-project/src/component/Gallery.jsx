import React from 'react'
import Profile from'./Profile'

function Gallery() {
  const student=
  [{
    pic:"https://imgcdn.floweraura.com/serene-white-rose-bouquet-9781110fl-C_0.jpg",
    myname:"Rohan sirohi",
    branch:"CS",
    section:"B",
    college:"ABES Engineering College"
  },
  {
    pic:"https://imgcdn.floweraura.com/serene-white-rose-bouquet-9781110fl-C_0.jpg",
    myname:"Alice",
    branch:"CS",
    section:"B",
    college:"ABES Engineering College"
  },
  {
    pic:"https://imgcdn.floweraura.com/serene-white-rose-bouquet-9781110fl-C_0.jpg",
    myname:"Bob",
    branch:"CS",
    section:"B",
    college:"ABES Engineering College"
  },
  {
    pic:"https://imgcdn.floweraura.com/serene-white-rose-bouquet-9781110fl-C_0.jpg",
    myname:"Charlie",
    branch:"CS",
    section:"B",
    college:"ABES Engineering College"
  }
]
  return (
    <div className='gallery'>
      {/*<div> <Profile name="Rimjhim Prakash" branch="CS" section="B" college="ABES Engineering College" /> </div>
      <div> <Profile name="Vansh Tomer" branch="CS" section="B" college="ABES Engineering College"/> </div>
      <div> <Profile name="Ansh Tomer" branch="CS" section="B" college="ABES Engineering College"/> </div>
      */}
      
      {
        student.map((ele,index)=>(
          <Profile data={ele} key={index} />
        ))
      }

    </div>
  )
}

export default Gallery