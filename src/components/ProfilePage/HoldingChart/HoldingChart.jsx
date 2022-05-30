import React, { useEffect, useState } from "react";
import {Chart, registerables } from 'chart.js'
import {CategoryScale} from 'chart.js'; 
import {Bar } from 'react-chartjs-2'

import './HoldingChart.scss'

Chart.register(...registerables);
Chart.register(CategoryScale);

export default function HoldingChart({holding}){
    const [labels, setLabels] = useState([]);
    const [dataSet, setDataset] = useState([]);

    useEffect(() =>{
        let resLabels = []
        let resDataset = []
        Object.keys(holding).forEach(coin =>{
            resLabels.push(coin)
            resDataset.push(holding[coin])
        })
        setLabels(resLabels)
        setDataset(resDataset)
    }, [holding])

    const data = {
        labels: labels,
        options: {
            plugins: {
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        font: {
                            size: 48
                        }
                    }
                }
            }
        },
        datasets: [{
            label: 'coin count',
            data: dataSet,
            fill: false,
            backgroundColor: '#bca08a',
            borderColor: 'rgb(255, 255, 255)',
            tension: 0.1
        }]
    };

    return <Bar 
        data={data} 
        className='bar' 
        width={'4000'}
        height={'2000'}
    />
}
