"use client"
import { useEffect } from "react"
import Chart from 'chart.js/auto';
import React from 'react'

const Piechart = () => {
    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Performance", "Behaviour", "Punctuality"],
                datasets: [{
                    data: [70, 10, 20],
                    borderColor: [
                        "#3cba9f",
                        "#ffa500",
                        "#c45850",
                    ],
                    backgroundColor: [
                        "rgb(60,186,159,0.1)",
                        "rgb(255,165,0,0.1)",
                        "rgb(196,88,80,0.1)",
                    ],
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        display: false,
                    }],
                    yAxes: [{
                        display: false,
                    }],
                }
            },
        });
        return () => {
            myChart.destroy();
         };
    }, [])

  return (
    <>
      <h1 className="text-center mt-5 text-xl">Pie Chart</h1>
            <div className="container mt-5 w-50 h-50">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <canvas id="myChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Piechart;
