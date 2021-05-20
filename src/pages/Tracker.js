import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';
import "../css/Tracker.css"
import ScaleLoader from "react-spinners/ScaleLoader";


function Tracker() {

    const [track, settrack] = useState([])
    const [load, setload] = useState(false)




    const css = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }



    const trackapi = async () => {

        await fetch("https://api.covid19india.org/data.json")
            .then((response) => response.json())
            .then((json) => {
                // console.log(json.statewise);
                settrack(json.statewise);
            });
        setload(true)

    };

    useEffect(() => {

        trackapi();
    }, []);


    return (
        <div className="tracker">
            <h1>Tracking for covid cases state wise</h1>
            <hr />
            {load

                ?
                <div className="table-responsive">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>States Name</th>
                                <th>States Code</th>
                                <th>Active Cases</th>
                                <th>confirmed Cases</th>
                                <th>Deaths</th>
                                <th>Recovered</th>
                                <th>Last Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                track.map((item) => (
                                    <tr>
                                        <td className="state__color">
                                            {item.state}
                                        </td>
                                        <td className="state__codecolor">
                                            {item.statecode}
                                        </td>
                                        <td className="state__active">
                                            {item.active}
                                        </td>
                                        <td className="state__confirmed">
                                            {item.confirmed}
                                        </td>
                                        
                                        <td className="state__deaths">
                                            {item.deaths}
                                        </td>
                                        <td className="state__recovered">
                                            {item.recovered}
                                        </td>
                                        <td className="lastup">
                                            {item.lastupdatedtime}
                                        </td>


                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>

                :
                <ScaleLoader
                    className="animated_" css={css} color={"slateblue"} loading={true} size={100} />


            }




        </div>
    )
}

export default Tracker
