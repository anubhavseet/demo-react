import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"

function App() {
  const [count, setCount] = useState(0)

 
  useGSAP(()=>{
    gsap.to("#box",{
      x:300,
      repeat: -1,
      yoyo:true,
      rotation:360,
      borderRadius:100,
      scale:1.5,
      duration:1.5,
      ease:"bounce"
    }),
    gsap.from("#box2",{
      x:150,
      y:250,
      duration:1.5,
      scale:3,
      repeat:-1,
      borderRadius:100,
      rotation:360,
      yoyo:true,
      ease:"elastic.inOut"


    }),
    gsap.fromTo("#box3",{
      x:20,
      y:450,
      repeat: -1,
      yoyo:true,
      rotation:0,
      borderRadius:100,
      scale:2,
      duration:1.5,
      ease:"bounce.inOut"


    },{
      x:50,
      y:30,
      duration:1.5,
      scale:3,
      repeat:-1,
      borderRadius:20,
      rotation:360,
      yoyo:true,
      ease:'bounce.out'

    })
  },[])

 
  return (
    < >
      <div className=' flex flex-grow flex-col items-center justify-center gap-4'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className=" w-40 h-40  " alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-40 h-40 " alt="React logo" />
        </a>
        <div id='box' className=' bg-orange-300 text-black  font-bold w-20 h-20 text-center '>
              BOX
        </div>
        <div id='box2' className=' bg-teal-500 text-black mx-20  font-extrabold w-20 h-20 text-center '>
              BOX2
        </div>
        <div id='box3' className=' bg-slate-300 text-black mx-40 -my-8 font-extrabold w-20 h-20 text-center '>
              BOX3
        </div>
      </div>
     
    
       
     
    </>
  )
}

export default App
