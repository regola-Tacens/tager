import React from 'react'
import { useState } from 'react'


const ImageTagger = ({ src }) => {
    const [tags, setTag]=useState([])

    const createTag =async (e)=> {
        let tag = await window.prompt("write your tag")
        const { clientX, clientY, target } = e
        // const { x, y, width, height } = target.getBoundingClientRect()git
        setTag(state => [
            ...state, {
                posX: clientX, 
                posY: clientY,
                message: tag,
            }
        ])
        

    }

    return ( 
        <div>
             <img src={src} alt="qq" onClick={createTag} />
        </div>
     );
}
 
export default ImageTagger;

