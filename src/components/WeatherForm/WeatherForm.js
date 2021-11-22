import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from './WeatherForm.module.css';

export class WeatherForm extends Component {
  state = {
    input: '',
  };

  onChangeHandler = (ev) => {
    this.setState({ input: ev.target.value });
  };

  onSubmitHandler = (ev) => {
    ev.preventDefault();
    this.props.onSubmitPostCode(this.state.input.trim());
    this.setState({ input: '' });
  };

  render() {
    return (
      <Row className='justify-content-center'>
        <Col>
          <Form className={styles.form} onSubmit={this.onSubmitHandler}>
            <Form.Label>Enter your post code for the weather</Form.Label>
            <Form.Control
              type='text'
              aria-label='post code'
              placeholder='Enter your post code...'
              value={this.state.input}
              onChange={this.onChangeHandler}
            />
            <Button type='submit' className={styles.btn}>
              Get my forecast!
            </Button>
          </Form>{' '}
        </Col>
      </Row>
    );
  }
}

export default WeatherForm;
