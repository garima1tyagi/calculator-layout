import React, {Component} from 'react'

const CardUI = (props) => {
    return(
        <div className=" card card-content-center">
        <img src= {props.imgSrc} alt={props.altName} className="card-img-top"></img>
            <div className="overflow card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-success">More Info</button>
        </div>
            </div>
    ) 
}

export default CardUI

