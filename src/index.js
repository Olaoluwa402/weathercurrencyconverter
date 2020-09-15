import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import App from './App';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


ReactDOM.render(
	<ErrorBoundary>
		<App />
	</ErrorBoundary>,
	 document.getElementById('root'));

