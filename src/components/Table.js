import React from 'react'

export default function Table(props) {
    return (
        <div className="container my-5">
             <div className="row " id="row" >
                        <div className="col-sm-2 border">
                        S.no
                        </div>
                        <div className="col-sm-2 border">
                        City
                        </div>
                        <div className="col-sm-2 border">
                        Temperature
                        </div>
                        <div className="col-sm-2 border">
                        Humidity
                        </div>
                        <div className="col-sm-2 border">
                        Pressure
                        </div>
                        <div className="col-sm-2 border">
                        Wind Speed
                        </div>
                        </div>
            {props.tableRow}
            
        </div>
    )
}
