import React, { Component } from 'react'
import './Calculator.scss'

class Calculator extends Component {
    render() {
        return (
            <div>
                 <h3>Bootstrap Grids</h3>
            <div className="calculator-wrapper container">
               <div className="col-12 first-level">
                <div className="col-9 float-left  pl-0">
                <input type="text" placeholder="Enter the number" className="input-wrapper"/>
                    </div>
                    <div className="col-3 float-left initial-value">
                        C
                    </div>
                    
            </div>
            <div className="col-12 first-level">
                <div className="col-3 float-left initial-value">
                    1
                    </div>
                    <div className="col-3 float-left initial-value">
                        2
                    </div>
                    <div className="col-3 float-left initial-value">
                        3
                    </div>
                    <div className="col-3 float-left initial-value">
                        /
                    </div>
                    
            </div>
            <div className="col-12 first-level">
                <div className="col-3 float-left initial-value">
                    4
                    </div>
                    <div className="col-3 float-left initial-value">
                        5
                    </div>
                    <div className="col-3 float-left initial-value">
                        6
                    </div>
                    <div className="col-3 float-left initial-value">
                        -
                    </div>
                    
            </div>
            <div className="col-12 first-level">
                <div className="col-3 float-left initial-value">
                    7
                    </div>
                    <div className="col-3 float-left initial-value">
                        8
                    </div>
                    <div className="col-3 float-left initial-value">
                        9
                    </div>
                    <div className="col-3 float-left initial-value">
                        +
                    </div>
                    
            </div>
            <div className="col-12 first-level">
                <div className="col-3 float-left initial-value">
                    .
                    </div>
                    <div className="col-3 float-left initial-value">
                        0
                    </div>
                    <div className="col-3 float-left initial-value">
                        =
                    </div>
                    <div className="col-3 float-left initial-value">
                        *
                    </div>
                    </div>
            </div>
            </div>
        )
    }
}
export default Calculator