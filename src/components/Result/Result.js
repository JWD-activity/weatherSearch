import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Result.module.css';

export class Result extends Component {
  render() {
    const { weather, main, name: city } = this.props.data;
    const { icon, main: info, description } = weather[0];

    return (
      <Row className={styles.card}>
        <p className='mb-5'>
          <i className='bi bi-geo-alt-fill' /> {city}
        </p>
        <Col md={8} sm={12}>
          {' '}
          <h1>{main.temp} &#8451;</h1>
          <p>
            <i className='bi bi-thermometer-half' /> Max {main.temp_max} &#8451;
            / Min {main.temp_min} &#8451;
          </p>
          <p>
            <i className='bi bi-check-circle' /> {description}
          </p>
        </Col>
        <Col md={4} sm={12}>
          <img
            src={` http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={info}
          />
        </Col>
      </Row>
    );
  }
}

export default Result;
