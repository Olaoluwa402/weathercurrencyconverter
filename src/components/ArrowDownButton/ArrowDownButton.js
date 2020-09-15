import React from 'react';

import './ArrowDownButton.css';

const arrowDownButton = props => {
	return (
		<React.Fragment>
			<a href="#special-items" className="btn header-link"><span className="i fas fa-arrow-down"></span></a>
		</React.Fragment>
	);
};

export default arrowDownButton;
