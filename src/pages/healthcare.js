// import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import ClockLoader from "react-spinners/ClockLoader";
import "../css/Healthcare.css"




const Healthcare = () => {

    const [district, setdistrict] = useState([])
    const [load, setload] = useState(false)
    const [search, setsearch] = useState('')


    const ring_css = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }


    const apiGet = async () => {

        await fetch("https://4sov3wdiag.execute-api.us-east-1.amazonaws.com/coron/ckapp")
            .then((response) => response.json())
            .then((json) => {
                // console.log(json);
                setdistrict(json.Items);
            });
        setload(true)
    };

    useEffect(() => {

        apiGet();
    }, []);


    return (

        <div className="healthcare">



            <h1>Healthcare Centers</h1>

            <div class="form-outline">
                <input
                    type="search"
                    id="form1"
                    placeholder="Search a District"
                    class="form-control"
                    onChange={event => { setsearch(event.target.value) }}
                />
            </div>
            <hr />




            {load ?

                <Table className="tab" striped bordered hover>

                    <tbody>
                        {
                            district.filter((val) => {
                                if (search === "") {
                                    return val;
                                } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                                    return val;
                                }
                            }).map((val) => (
                                <tr>
                                    <td>
                                        {val.name.match(/[^"]+/i)[0]}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>




                </Table>
                :

                <ClockLoader className="animated_" css={ring_css} color={"slateblue"} loading={true} size={100} />
            }


        </div>
    )
}

export default Healthcare



