import React, { Component } from 'react';
import styles from './HeaderNav.scss';

export default class HeaderNav extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.inner}>
                    <h1><img className={styles.logo} src="culture-logo.png" /></h1>
                    <p className={styles.strapline}>Manufacturing happiness since the 17th Century</p>
                </div>
            </div>
        );
    }
}