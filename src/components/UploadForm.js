
import React from "react"
import { Form } from "react-bootstrap"

const UploadForm = ()=>{



    return<>
    <Form className="w-50">
        
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    
    </>
}
export default UploadForm;