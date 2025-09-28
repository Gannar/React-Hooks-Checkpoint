import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

function Filter({ setTitleFilter, setRateFilter }) {
  return (
    <Form className="mt-3">
      <Row>
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Search by title..."
            onChange={(e) => setTitleFilter(e.target.value)}
          />
        </Col>
        <Col md={3}>
          <Form.Control
            type="number"
            min="1"
            max="5"
            placeholder="Min rating"
            onChange={(e) => setRateFilter(Number(e.target.value))}
          />
        </Col>
      </Row>
    </Form>
  );
}

export default Filter;
