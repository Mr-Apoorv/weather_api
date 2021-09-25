import React from 'react'

export default function Table(props) {
    return (
        <div className="container my-5">
             <div className="row " id="row" >
                        <div className="col-sm-2 border" key="i">
                        S.no
                        </div>
                        <div className="col-sm-2 border" key="i">
                        City
                        </div>
                        <div className="col-sm-2 border" key="i">
                        Temperature
                        </div>
                        <div className="col-sm-2 border" key="i">
                        Humidity
                        </div>
                        <div className="col-sm-2 border" key="i">
                        Pressure
                        </div>
                        <div className="col-sm-2 border" key="i">
                        Wind Speed
                        </div>
                        </div>
            {props.tableRow}
            
        </div>
    )
}
