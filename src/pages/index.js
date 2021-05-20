import React, { useEffect, useState } from 'react'
// import LineGraph from '../components/LineGraph'
import "../css/Home.css"
import { Bar, Doughnut } from 'react-chartjs-2'




function Home() {

    const [content, setcontent] = useState([])
    const [world, setworld] = useState([])



    const trackworld = async () => {

        await fetch("https://api.caw.sh/v3/covid-19/all")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setworld(json);
            });

    };

    useEffect(() => {
        trackworld();
    }, []);





    const data1 = {
        labels: ['Jan', 'Feb', 'Mar', 'April', 'May'],
        datasets: [
            {
                label: 'Covid Cases in 2021 (Jan-Recent)',
                data: [10286709, 10766245, 11124527, 12303131, 19925517],


                backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)'],
                pointBackgroundColor: ['rgba(255, 99, 132, 0.2)'],
                pointBorderColor: ['rgba(255, 99, 132, 1)'],

            },
            {
                label: "Covid Recovered in 2021 (Jan-Recent)",
                data: [9883461, 10448406, 10798921, 11525039, 15992271],

                backgroundColor: ['rgba(14, 162, 135, 0.2)'],
                borderColor: ['rgba(54, 162, 1, 235)'],
                pointBackgroundColor: ['rgba(14, 162, 135, 0.2)'],
                pointBorderColor: ['rgba(54, 162, 1, 235)'],
            },
            {
                label: "Covid Death Cases in 2021 (Jan-Recent)",
                data: [148994, 154486, 157248, 163396, 215542],

                backgroundColor: ['rgba(54, 162, 235, 0.2)',],
                borderColor: ['rgba(54, 162, 235, 1)',],
                pointBackgroundColor: ['rgba(54, 162, 235, 0.2)',],
                pointBorderColor: ['rgba(54, 162, 235, 1)'],
            }
        ],
        options: {

            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: true

        }


    }


    const data2 = {
        labels: [
            'Cases',
            'Deaths',
            'Recovered',
            'active',
            'critical'
        ],
        datasets: [{
            label: 'World Dataset',
            data: [world.cases, world.deaths, world.recovered, world.active, world.critical],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(25, 205, 86)',
                'rgb(255, 205, 86)',
                'rgb(255, 205, 186)'

            ],
            hoverOffset: 4
        }],
        options: {

            responsive: true

        }
    };

    // https://disease.sh/v3/covid-19/historical/india?lastdays=137

    useEffect(() => {
        fetch('./coroknow.json').then(response => {
            console.log(response);
            return response.json();
        }).then(data => {
            // Work with JSON data here
            console.log(data);
            setcontent(data.Home)
        }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
        });
    }, [])



    return (
        <div className="home">

            <div className="Home__left">

                {content.map(e => (
                    <div className="con">
                        <h5>Things to Remember in Covid</h5>

                        <li className="content mb-1">{e.Isolation}</li>

                        <li className="content mb-1">{e.Disinfection}</li>
                        <li className="content mb-1">{e.Diet}</li>
                        <li className="content">{e.Vaccine}</li>

                        <ul className="list-group">
                            <h5>Laws and Regulations</h5>
                            <li className="list-group-item">{e.Laws[0].A}</li>
                            <li className="list-group-item">{e.Laws[0].B}</li>
                            <li className="list-group-item">{e.Laws[0].C}</li>
                            <li className="list-group-item">{e.Laws[0].D}</li>
                            <li className="list-group-item">{e.Laws[0].E}</li>
                        </ul>

                    </div>

                ))}

            </div>

            <div className="Home__middle">

                <div className="Chart">

                    <div className="graphs">
                        <h3>World Wide Cases Graph</h3>
                        <hr />
                        <Bar data={data1} />
                    </div>

                    <div className="graphs">
                        <h1>Covid Cases Graph</h1>
                        <hr />
                        <Doughnut data={data2} />
                    </div>

                </div>
            </div>


        </div >


    )
}

export default Home
