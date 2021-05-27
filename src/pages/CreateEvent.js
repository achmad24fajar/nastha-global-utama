import React from "react";
import { Row, Col } from "react-bootstrap";

import MyForm from "../components/MyForm";

const CreateEvent = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="mt-4">
          <Row>
            <Col md={7} className="bg-white py-3">
              <div className="mb-3">
                <h4>Add Event</h4>
              </div>
              <MyForm />
            </Col>
            <Col md={5} className="bg-secondary py-4">
              <div className="text-center">
                <h2 className="text-white mb-5">
                  "Bring your great idea to this meet!"
                </h2>
                <img src="meet.svg" style={{ width: "70%" }} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
