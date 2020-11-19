import React from 'react';
import "./SearchAssignment.css";
import SearchIcon from "@material-ui/icons/Search";
import { Col, Container, Row } from 'react-bootstrap';

const SearchAssignment = () => {
    return (
        <div className="search-assignment">
            <Container fluid="md">
                <Row>
                    <Col>
                        <div style={{padding:"70px"}}>
                            <h4 style={{color:"white"}}>Find 100+</h4>
                            <h4 style={{color:"white"}}>Assignment From Here</h4>
                            <p style={{color:"white", fontWeight:"400"}}>All Assignment are included in porao.com</p>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Search Courses by Topic, Subject etc"
                                    className="form-control"
                                    style={{width:"60%",borderRadius:"20px"}}
                                />  
                            </div>
                        </div>
                    </Col>
                </Row> 
            </Container>
        </div>
    );
};

export default SearchAssignment;