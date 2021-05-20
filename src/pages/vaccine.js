import React, { useEffect, useState } from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
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







    const apiGet = async () => {
        await fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=462016&date=31-03-2021")
            .then((response) => response.json())
            .then((json) => {
                console.log(json.sessions);
                setvac(json.sessions);
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
                        {vac.map(e => (

                            <Card className="text-center">
                                <Card.Header>{e.vaccine}</Card.Header>
                                <Card.Body>
                                    <Card.Title>Availability: {e.available_capacity}</Card.Title>
                                    <Card.Text>
                                        <div className="sec">
                                            <p>From : {e.from}</p>
                                            <p>To : {e.to}</p>
                                        </div>


                                    </Card.Text>
                                    <hr />

                                    <Card.Text>
                                        Minimum Age: {e.min_age_limit}
                                    </Card.Text>
                                    <hr />
                                    <Card.Text>
                                        Fees: {e.fee}
                                    </Card.Text>
                                    <hr />

                                    <Card.Text>
                                        <div className="sec">
                                            <p> Hospital:{e.name}</p>
                                            <p>    State:{e.state_name}</p>
                                            <p> District:{e.district_name}</p>
                                            <p> Pincode:{e.pincode}</p>
                                        </div>
                                    </Card.Text>

                                </Card.Body>
                                <hr />
                                <Card.Body>
                                    <Card.Title>Slots Available</Card.Title>
                                    <ListGroup className="list-group-flush">
                                        {e.slots.map(q => (

                                            <ListGroupItem>{q}</ListGroupItem>

                                        ))}
                                    </ListGroup>

                                </Card.Body>
                                <Card.Footer className="text-muted">Date:{e.date}</Card.Footer>
                            </Card>


                        ))}
                    </div>
                    :
                    <RingLoader className="animated_" css={ring_css} color={"slateblue"} loading={true} size={100} />

            }



        </div>

    )
}

export default Vaccine
