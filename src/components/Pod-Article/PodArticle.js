import React, { Component } from 'react';
import styles from './PodArticle.scss';

export default class PodArticle extends Component {
    render() {
        const random = Math.random();
        const image = `http://lorempixel.com/240/135/?cb=${random}`;
        return (
            <div className={styles.root}>
                <h2 className={styles.heading}>Article</h2>                
                <img className={styles.image} src={image} />                
            </div>
        );
    }
}