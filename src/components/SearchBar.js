import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSearchValue } from "./contexts/SearchValueContext";
const SearchBar = ()=> {

const {searchValue, setSearchValue} = useSearchValue();

const inputHandeler = (e)=>{
    e.preventDefault();
    setSearchValue(e.target.value.toLowerCase());
    
  }
  return (
    <Container className="mt-5">
      <Row>
        
        <Col sm={4}>
          
            <Form.Control style={{minWidth:"300px"}}
            value={searchValue}
              type="search"
              placeholder="Search"
              className="me-2"
              onChange={inputHandeler}
            />
          
          
        </Col>
      </Row>
    </Container>
  );
}
export default SearchBar;