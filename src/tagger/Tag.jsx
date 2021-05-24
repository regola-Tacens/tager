import React from 'react'

export default function Tag({ tag }) {

    const { posX, posY, message,id, targetWidth } = tag

    const myImage = document.getElementById('myImage')
    const myImageRect = myImage.getBoundingClientRect()

    const test =() => {
        console.log(myImageRect)
    }
    
    const growTag =()=>{
         const currentTag = document.getElementById(id)
        //  console.table(posX, myImageRect.width)
         posX > myImageRect.width - 200 ? currentTag.classList.add('growRight') : currentTag.classList.add('growLeft')
        //  currentTag.classList.add('growRight')
         currentTag.innerHTML=message
         currentTag.style.wordWrap = 'break-word'
     }

     const shrinkTag =()=> {
        const currentTag = document.getElementById(id)
        posX > myImageRect.width - 220 ? currentTag.classList.remove('growRight') : currentTag.classList.remove('growLeft')
        currentTag.innerHTML=''
     }



    return (
        <div className='tag' id={id} style={{ left: `${posX}px`, top: `${posY}px` }} onMouseEnter={growTag} onMouseLeave={shrinkTag} onClick={test}>
             
            
        </div>
    )
}

