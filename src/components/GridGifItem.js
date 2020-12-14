import React from 'react'

export const GridGifItem = ( {url, title} ) => {

    //console.log(url)
    return (
        <div className="card animate_animated animate__bounce" >
            <img src={url} alt={title}></img>
            <p>{ title }</p>
        </div>
    )
}
