
import React from 'react'
import {Container, Row, Col, FormControl, InputGroup, Form, ProgressBar} from 'react-bootstrap'
import './Group.css'
import { faBook} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import book1 from './books/14.jpg'
import book2 from './books/9.jpg'
import book3 from './books/13.jpg'
import book4 from './books/11.jpg'
import book5 from './books/9.jpg'
import book6 from './books/12.jpg'
import Track from './Track'

class Group extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
    }

    render() {
        if (this.state.page == 1) {
        return (
 

                <Container className='glist'>

                        <Row className='content gBooks'>
            
                                <Col className='gIntro'>
                                   <FontAwesomeIcon className="icon" icon={faBook}  className="faa" size="3x"  />
                                </Col>
                                <Col className='gIntro g2'>
                                    <p className='gTitle'>
                                    Quote Sharing w/ Alice
                                    </p>
                                </Col>
                    
             
                        </Row>


                        <Row className='content gBooks'>
            
                                <Col className='gIntro'>
                                   <FontAwesomeIcon className="icon" icon={faBook}  className="faa" size="3x"  />
                                </Col>
                                <Col className='gIntro g2'>
                                    <p className='gTitle'>
                                    Contemporary Civilizations (Tue/Thu 10am)
                                    </p>
                                </Col>
                    
             
                        </Row>


                        <Row className='content gBooks gSpecial' onClick = {() => {this.setState({page: 2})}}>
            
                                <Col className='gIntro'>
                                   <FontAwesomeIcon className="icon" icon={faBook}  className="faa" size="3x"  />
                                </Col>
                                <Col className='gIntro g2'>
                                    <p className='gTitle'>
                                    Family Book Club (Sun 9pm)
                                    </p>
                                </Col>
                    
             
                        </Row>

                        <Row className='content gBooks'>
            
                                <Col className='gIntro'>
                                   <FontAwesomeIcon className="icon" icon={faBook}  className="faa" size="3x"  />
                                </Col>
                                <Col className='gIntro g2'>
                                    <p className='gTitle'>
                                    Bible Study Group (Sun 2pm)
                                    </p>
                                </Col>
                    
             
                        </Row>

                       
                </Container>
            


 
        );

        }else {
            return (<Track />);
        }
    }
}


export default  Group;
