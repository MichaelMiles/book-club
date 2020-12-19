
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './BookList.css'
import firstBook from './books/1.jpg'

class BookList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <Container className='list'>

                    <Row className='book'>
                        <Col className='c1'>
                            <img src={firstBook} alt ="" width="58" height="92"/>
                        </Col>
                        <Col className='c2'>
                            <Row className='r1'>
                                P.22
                            </Row>
                            <Row className='r2'>
                                We are survival machines – robot vehicles blindly programmed to preserve the selfish molecules known as genes.
                            </Row>
                            <Row className='r3'>
                                3 hours ago
                            </Row>
                        </Col>
                        
                    </Row>

                     <Row className='book'>
                        <Col className='c1'>
                            <img src={firstBook} alt ="" width="58" height="92"/>
                        </Col>
                        <Col className='c2'>
                            <Row className='r1'>
                                P.348
                            </Row>
                            <Row className='r2'>
                                Happiness does not really depend on objective conditions of either wealth, health or even community. Rather, it depends on the...
                            </Row>
                            <Row className='r3'>
                                12 hours ago
                            </Row>
                        </Col>
                    </Row>
                    <Row className='book'>
                        <Col className='c1'>
                            <img src={firstBook} alt ="" width="58" height="92"/>
                        </Col>
                        <Col className='c2'>
                            <Row className='r1'>
                                P.35
                            </Row>
                            <Row className='r2'>
                               A basic rule of mathematical life: if the universe hands you a hard problem, try to solve an easier one instead, and hope the ...
                            </Row>
                            <Row className='r3'>
                                1 day ago
                            </Row>
                        </Col>
                    </Row>

                    <Row className='book'>
                        <Col className='c1'>
                            <img src={firstBook} alt ="" width="58" height="92"/>
                        </Col>
                        <Col className='c2'>
                            <Row className='r1'>
                                Ch.6
                            </Row>
                            <Row className='r2'>
                               The LORD saw how great the wickedness of the human race had become on the earth, and that every inclination of the thoughts ...
                            </Row>
                            <Row className='r3'>
                                2 days ago
                            </Row>
                        </Col>
                    </Row>

                     <Row className='book'>
                        <Col className='c1'>
                            <img src={firstBook} alt ="" width="58" height="92"/>
                        </Col>
                        <Col className='c2'>
                            <Row className='r1'>
                                P.22
                            </Row>
                            <Row className='r2'>
                               According to Buddhism, the root of suffering is neither the feeling of pain nor of sadness nor even of meaninglessness...
                            </Row>
                            <Row className='r3'>
                                4 hours ago
                            </Row>
                        </Col>
                    </Row>


                     <Row className='book'>
                        <Col className='c1'>
                            <img src={firstBook} alt ="" width="58" height="92"/>
                        </Col>
                        <Col className='c2'>
                            <Row className='r1'>
                                P.1
                            </Row>
                            <Row className='r2'>
                                A book review is a form of literary criticism in which a book isrsasdasdsdasdaddsadeview or scholarly reviewasdsss
                            </Row>
                            <Row className='r3'>
                                3 hours ago
                            </Row>
                        </Col>
                    </Row>


                </Container>


                <Row className='add'>
                    <b>Add New </b>
                    
                </Row>
            </div>
 
        );
    }
}


export default BookList;
