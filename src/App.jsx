import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
    return (
        <div className='w-full h-screen bg-black'>
            <h1 className='text-3xl font-bold underline text-amber-400'>hello</h1>
        </div>
    )
}

export default App