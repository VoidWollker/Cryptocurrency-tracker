import React, {useState} from "react";
import {Chart, registerables } from 'chart.js'
import {CategoryScale} from 'chart.js'; 
import { Bar } from 'react-chartjs-2'

Chart.register(...registerables);
Chart.register(CategoryScale);

export default function CureencyChart({currency}){
    //const [labels, setLabels] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    //const [dataset, setDataset] = useState([[65, 59, 80, 81, 56, 55, 40]]);

    const labels = currency.map( item =>{
        return item.name
    })

    const dataset = currency.map(item => {
        return item.market_data.current_price.usd
    })

    const data = {
        labels: labels,
        datasets: [
            {
                label: "My First Dataset",
                data: dataset,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(201, 203, 207, 0.2)",
                ],
                borderColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(54, 162, 235)",
                    "rgb(153, 102, 255)",
                    "rgb(201, 203, 207)",
                ],
                borderWidth: 1
            },
        ],
    };


    return <Bar data={data} />;

}