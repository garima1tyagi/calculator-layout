import React, { Component } from 'react'
import CardUI  from './CardUI'
import BunchyImage from '../assets/bunchyJumping.jpg'
import SkyDivingImage from '../assets/Jumptown-Skydiving-Roller-Coaster.jpg'
import Snorkeling from '../assets/Snorkeling.jpg'


class Card extends Component {
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
            <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
            <CardUI imgSrc={BunchyImage} altName={'Bunchy Image'} title={"Bunchy Jumping"} />
                </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
            <CardUI imgSrc={SkyDivingImage} altName={'Sky Diving'} title={"Sky Diving"} />
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
            <CardUI imgSrc={Snorkeling} altName={'Snorkeling'} title={"Snorkeling"} />
            </div>
                </div>
                </div>
                
        )
    }
}

export default Card