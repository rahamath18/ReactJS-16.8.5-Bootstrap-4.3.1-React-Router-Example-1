import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import HeaderHtml from './HeaderHtml.js';
import Header from './Header.js';
import MainContent from './MainContent.js';
import Footer from './Footer.js';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(<HeaderHtml />, document.getElementById('HeaderHtml'));
ReactDOM.render(<Header />, document.getElementById('Header'));
ReactDOM.render(<MainContent />, document.getElementById('MainContent'));
ReactDOM.render(<Footer />, document.getElementById('Footer'));

ReactDOM.render(<App />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
