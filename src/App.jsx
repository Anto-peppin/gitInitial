// import React, { useRef } from 'react'
 import gsap from 'gsap'
 import {useGSAP} from '@gsap/react'
 import {ScrollTrigger} from 'gsap/all'
import './App.css'
const App = () => {
  
  gsap.registerPlugin(ScrollTrigger)

  let tl = gsap.timeline({
    stagger:.5,
     scrollTrigger:{
     trigger:'.div',
      start: 'top -30%',
      scrub: true,
    }
   
  })
useGSAP(()=>{
   tl.to('.div',{
      
      y:200,
      yoyo:true,
      
      
      
    })
    tl.to('.div',{
      y:300,
      backgroundColor:'green',
      borderRadius:100,
    })
    tl.to('.div',{
      y:500,
      backgroundColor:'red',
      borderRadius:0,
    })
    tl.to('.div',{
      x:200,
      backgroundColor:'white',
      borderRadius:50,
    })
   
    tl.to('.div',{
      x:0,
      backgroundColor:'red',
      borderRadius:100,
    })
    tl.to('.div',{
      y:700,
      backgroundColor:'red',
      borderRadius:100,
    })
})
 



  return (
   <>

 
    <div className="body">
    <div className="div"></div>
  </div>
   <div className="body1">
   <h1>My name is Anto peppin</h1>
  </div>
   </>
  )
}

export default App




