import React, { useEffect, useState } from 'react'
// import LineGraph from '../components/LineGraph'
import "../css/Home.css"
// import coroknow from "../assets/coroknow.json"
import { Bar, Doughnut } from 'react-chartjs-2'




function Home() {

    // const [content, setcontent] = useState([])
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


    const details = [

        {
            "Isolation": "It is very necessary to keep ready a separate room or place for a sick person. For other members of the family, it's advised to keep distance from a sick person. Only one person of the family is allowed to provide food, medicine, and other kinds of stuff to sick people.  It is also important for that person to male fewest contact with other household members.",
            "Premanagemnet": "You must have sufficient stock of sanitizers, medicines, stuff of daily needs. In case of sickness prepare a separate and well-ventilated room for a sick person. Keep the contact list of nearby groceries and medical facilities. Pay special attention to the children's and old peoples of your family. ",
            "Disinfection": "Use sanitizers and hand wash to disinfect household things and frequently touched surfaces like mobile and TV remote. Every time when you come home from outside you must sanitize your clothes and wash your hands properly. Disinfection reduces the effectiveness of coronavirus. Keep disinfecting the high touches surfaces in the household three to five days a week. A proper routine should be followed for disinfection.",
            "Diet": "Before preparing or eating food it is necessary to wash vegetables and your hands properly. Don't use sanitizer to sanitize your hands before eating food. A proper nutritional diet must be followed by a sick person and also by other members of the household. Pay special attention the person is at high risk for serious illness.Ensure the sick a person has dry fruits, fruits, pulses, and eggs in their diet. And also the sick person stays hydrated.",
            "Laws": [
                {
                    "A": "Section 271 of the Indian Penal Code, 1860 - “Disobedience to quarantine rule. This section clearly says that whosoever don't follow the quarantine rule must be punished with imprisonment or fine or both.",
                    "B": "Section 269 of the Indian Penal Code, 1860 - “Negligent act likely to spread infection of disease danger­ous to life. This section applies to those who negligently act to spread the virus. They shall be penalized with imprisonment or fine or both.",
                    "C": "Section 270 of the Indian Penal Code, 1860- “Malignant act likely to spread infection of disease danger­ous to life. This law is for those who know the consequence of their actions could lead to the spread of the virus and still choose to do such an act shall be penalized.",
                    "D": "The Epidemic Disease Act, 1897-  Power to take special measures and prescribe regulations as a too dangerous epidemic disease.",
                    "E": "Section 188 of Indian Penal Code - According to this law you can not disobey an order duly promulgated by a public servant. Defaulters who disobey the orders of the public servants and roan around aimlessly during the lockdown should be punished under strickt actions."
                }
            ],
            "Vaccine": " People who are fully vaccinated, so two weeks after the two-dose schedule people are protected and they can be together with other vaccinated people. The time between the first dose and the second dose should be of 28 days. Vaccination for COVID-19 voluntary. However, it is important to complete the schedule of vaccination for protecting yourself against this disease. And vaccination is also important to limit the spread of this disease to close contacts and family members. In case after the first dose of vaccine you become infected.  In case after the first dose of the vaccine, you become infected then you are not eligible for a second dose. When you recover and after the Covid test if your report is negative then after a month you can schedule for the second dose of vaccine."
        }

    ]


    // useEffect(() => {

    //     fetch(Home).then(response => {
    //         console.log(response);
    //         return response.json();
    //     }).then(data => {
    //         // Work with JSON data here
    //         console.log(data);
    //         setcontent(data.Home)
    //     }).catch(err => {
    //         // Do something for an error here
    //         console.log("Error Reading data " + err);
    //     });
    // }, [])

    // JSON.parse("./coroknow.json")


    return (
        <div className="home">

            <div className="Home__left">

                {details.map(e => (
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