import React from 'react'
import { Card } from 'react-bootstrap'
// import smile from "../assets/smile.webp"
import "../css/About.css"
import kajal from "../assets/kajal.jpeg"
import shivam from "../assets/shivam.jpeg"

function Aboutus() {


    return (
        <div className="about">
            <h1>About Us</h1>

            <div className="cardlist">
                <Card className="cardinfo">
                    <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C5603AQEmEAHnS-CxOQ/profile-displayphoto-shrink_200_200/0/1613386068170?e=1626912000&v=beta&t=g7HBpbvxRLEU_EcYu8MVk9PTpeY4Bf5-wNowZXSV9xA" />
                    <Card.Body>
                        <Card.Title>Shivansh Sharma</Card.Title>
                        <Card.Text>
                            Enrollment number: 0191CS181156
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="cardinfo">
                    <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C5603AQHdG7z1sUbHzg/profile-displayphoto-shrink_200_200/0/1613920363434?e=1626912000&v=beta&t=i6rTM2ejpSkqrLtX2WnP4ZybMFXCXmXcBpKRF9u96M8" />
                    <Card.Body>
                        <Card.Title>Prateek Wadhwani</Card.Title>
                        <Card.Text>
                            Enrollment number: 0191CS181112
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="cardinfo">
                    <Card.Img variant="top" src={kajal} />
                    <Card.Body>
                        <Card.Title>Kajal Kanade</Card.Title>
                        <Card.Text>
                            Enrollment number: 0191CS181058
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="cardinfo">
                    <Card.Img variant="top" src={shivam} />
                    <Card.Body>
                        <Card.Title>Shivam Kulpehra</Card.Title>
                        <Card.Text>
                            Enrollment number: 0191CS181154
                    </Card.Text>
                    </Card.Body>
                </Card>


            </div>




        </div>
    )
}

export default Aboutus
