import React, { useContext } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import { EventContext } from "../context/EventContext";

const Event = () => {
  const [state] = useContext(EventContext);
  console.log(state);
  return (
    <div className="mt-5">
      <div className="container">
        <div className="mt-4">
          <Row>
            {[...Array(3)].map((x, i) => (
              <Col md={4}>
                <Card
                  style={{ width: "18rem" }}
                  key={i}
                  className="shadow mx-auto">
                  <Card.Img
                    variant="top"
                    src="https://greatdayhr.com/wp-content/uploads/sites/18/2020/03/800_U_0164_meeting.jpg"
                  />
                  <Card.Body>
                    <Card.Title>
                      <div
                        className="font-weight-light"
                        style={{ fontSize: "15px" }}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span className="ml-2">Jakarta, Tebet</span>
                      </div>
                      <h4 className="mb-0">Meeting New Project</h4>
                      <span
                        className="font-weight-light"
                        style={{ fontSize: "15px" }}>
                        17 Agustus 2021
                      </span>
                    </Card.Title>
                    <div className="d-flex justify-content-between border-top border-bottom py-2 mb-3">
                      {[...Array(3)].map((x, i) => (
                        <div>
                          <div className="d-inline-block mr-2">
                            <FontAwesomeIcon icon={faUserCircle} />
                          </div>
                          <div className="d-inline-block">
                            <span>Fajar</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Card.Text>
                      <span className="font-weight-bold">Note: </span>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Event;
