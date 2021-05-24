import React from 'react'
import { useState } from 'react'
import Tag from './Tag'


const ImageTagger = ({ src }) => {
    const [tags, setTag]=useState([])

    const createTag =async (e)=> {
        let tag = await window.prompt("write your tag")
        const { clientX, clientY, target } = e
        const { x, y, width, height } = target.getBoundingClientRect()
        setTag(state => [
            ...state, {
                posX: clientX,
                posY: clientY,
                message: tag,
                id:Math.random() * (clientX+clientY),
                targetWidth : target.width
            }
        ])
        

    }

    return ( 
        <div className="imgContainer" id="imgContainer">
             <img src={src} alt="qq" onClick={createTag} id="myImage"/>
             {tags?.map(tag => <Tag tag={tag} key={tag.id}/>)}
        </div>
     );
}
 
export default ImageTagger;

