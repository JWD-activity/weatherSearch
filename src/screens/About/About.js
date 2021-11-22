import React, { Component } from 'react';

import Layout from '../../components/Layout/Layout';
import Result from '../../components/Result/Result';
import Error from '../../components/Error/Error';
import Col from 'react-bootstrap/Col';
import styles from './About.module.css';

import { getWeatherData } from '../../services/weather';
import WeatherForm from '../../components/WeatherForm/WeatherForm';

export class About extends Component {
  state = {
    weather: null,
  };

  onSubmitHandler = async (postcode) => {
    if (!postcode.trim()) {
      this.setErrorMessage('Please, enter something!');
      return;
    }

    const data = await getWeatherData(postcode);

    if (data?.weather) {
      this.setState({
        weather: data,
        error: { status: false, msg: '' },
      });
    } else this.setErrorMessage(data.message);
  };

  setErrorMessage = (message) => {
    this.setState({
      weather: null,
      error: { status: true, msg: message },
    });
  };

  render() {
    const { weather, error } = this.state;
    return (
      <Layout>
        <Col className={styles.box}>
          <WeatherForm onSubmitPostCode={this.onSubmitHandler} />
          {weather && <Result data={weather} />}
          {error?.status && <Error msg={error.msg} />}
        </Col>
      </Layout>
    );
  }
}

export default About;
