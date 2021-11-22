import React, { Component } from 'react';
import styles from './Error.module.css';

export class Error extends Component {
  render() {
    return (
      <h2 className={styles.heading}>
        <span role='img' aria-label='warning emoji'>
          ⛔️
        </span>{' '}
        {this.props.msg}{' '}
        <span role='img' aria-label='warning emoji'>
          ⛔️
        </span>
      </h2>
    );
  }
}

export default Error;
