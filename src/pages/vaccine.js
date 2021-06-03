import React, { useEffect, useState } from 'react'
import { Card, CardDeck, CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import RingLoader from "react-spinners/RingLoader";
import "../css/Vaccine.css"
function Vaccine() {
    // const [state, setstate] = useState([])
    const [vac, setvac] = useState([])
    const [load, setload] = useState(false)

    const ring_css = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }


    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();




    const apiGet = async () => {
        await fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=312&date=" + (date))
            .then((response) => response.json())
            .then((json) => {
                console.log(json.centers);
                setvac(json.centers);
            });
        setload(true)
    };

    useEffect(() => {

        apiGet();

    }, []);


    return (
        <div className="vaccine">
            {/* {state.forEach(e => <h1>{aaa.value}</h1>)} */}
            {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
            {/* {console.log(state[6].value)} */}


            <h1>Vaccine Availability in Bhopal</h1>
            <hr />


            {
                load

                    ?
                    <div className="vaccine_show">
                        {/* <div class="form-outline">
                            <input
                                type="search"
                                id="form1"
                                placeholder="Search a District"
                                class="form-control"
                                onChange={event => { }}
                            />
                        </div> */}
                        <div className="gh row">
                            <h1>Date:{date}</h1>
                            {vac.map(e => (

                                <Card style={{ width: '32rem' }} className="sty_card">

                                    <Card.Body>
                                        {e.sessions.map(Q => (
                                            <Card.Title>Vaccine Name: {Q.vaccine}</Card.Title>
                                        ))}
                                        <Card.Text>
                                            Location:{e.name}
                                        </Card.Text>
                                        <Card.Text>
                                            Address: {e.address}, {e.state_name}, {e.district_name}, block name: {e.block_name}
                                        </Card.Text>
                                        <Card.Text>
                                            Pincode: {e.pincode}
                                        </Card.Text>

                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>From:{e.from}</ListGroupItem>
                                        <ListGroupItem>To:{e.to}</ListGroupItem>
                                        <ListGroupItem>Fees Type:{e.fee_type}</ListGroupItem>

                                        {e.sessions.map(q => (
                                            <ListGroup className="list-group-flush">
                                                <Card.Text>
                                                    Date-{q.date}
                                                </Card.Text>
                                                <ListGroup.Item>Available Capacity Dose-1:{q.available_capacity_dose1}</ListGroup.Item>
                                                <ListGroup.Item>Available Capacity Dose-2:{q.available_capacity_dose2}</ListGroup.Item>
                                                <ListGroup.Item>Min Age limit:{q.min_age_limit}</ListGroup.Item>
                                                <ListGroupItem>Slots</ListGroupItem>
                                                {q.slots.map(r => (
                                                    <ListGroupItem>{r}</ListGroupItem>
                                                ))}
                                            </ListGroup>
                                        ))}

                                    </ListGroup>

                                </Card>


                            ))}
                        </div>
                    </div>
                    :
                    <RingLoader className="animated_" css={ring_css} color={"slateblue"} loading={true} size={100} />

            }



        </div>

    )
}

export default Vaccine
