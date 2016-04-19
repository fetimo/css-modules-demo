import React, { Component } from 'react';

import styles from './App.scss';

import HeaderNav from './Header-Nav/HeaderNav';
import PodArticle from './Pod-Article/PodArticle';
import PodProduct from './Pod-Product/PodProduct';

export default class App extends Component {
    render() {
        return (
            <div>
                <HeaderNav />
                <main className={styles.root}>
                    <section className={styles.row}>
                        <PodArticle />
                        <PodProduct />
                        <PodArticle />
                        <PodProduct />
                        <PodProduct />
                        <PodProduct />
                    </section>
                </main>
            </div>    
        );
    }
}