import React, { Component } from 'react';
import styles from './PodProduct.scss';

export default class PodProduct extends Component {
    render() {
        const random = Math.random();
        const image = `http://lorempixel.com/240/135/?cb=${random}`;
        return (
            <div className={styles.root}>
                    <div className={styles.front}>
                        <h2 className={styles.heading}>Product</h2>
                        <img className={styles.image} src={image} />
                    </div>
                    <div className={styles.back}>
                        <h2 className={styles.heading}>&nbsp;</h2>
                        <img className={styles.image} src={image} />
                    </div>
            </div>            
        );
    }
}