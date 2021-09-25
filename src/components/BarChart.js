import React from 'react'
import { Bar } from 'react-chartjs-2'

export default function BarChart(props) {
    let data= {
        labels: [...props.city],
        datasets: [{
            label: 'Temp',
            data: [...props.temp],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
              
            ],
            borderWidth: 1
        },
        {
            label: 'humidity',
            data: [...props.humidity],
            backgroundColor: [
               
                'rgba(54, 162, 235, 0.2)',
             
            ],
            borderColor: [
               
                'rgba(54, 162, 235, 1)',
               
            ],
            borderWidth: 1
        },
         {
            label: 'pressure',
            data: [...props.pressure],
            backgroundColor: [
               
                'rgba(255, 206, 86, 0.2)',
                
            ],
            borderColor: [
               
                'rgba(255, 206, 86, 1)',
               
            ],
            borderWidth: 1
        },
         {
            label: 'wind_speed',
            data: [...props.wind_speed],
            backgroundColor: [
              
                'rgba(75, 192, 192, 0.2)',
             
            ],
            borderColor: [
               
                'rgba(75, 192, 192, 1)',
               
            ],
            borderWidth: 1
        },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    return (
        <div className="container my-5">
            <Bar
	            data={data}
	            width={100}
	            height={400}
	            options={{ maintainAspectRatio: false }}
            />
        </div>
    )
}

