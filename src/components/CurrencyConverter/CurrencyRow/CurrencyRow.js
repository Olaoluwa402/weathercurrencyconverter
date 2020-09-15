import React from 'react';

import './CurrencyRow.css';

const CurrencyRow = props => {
	const {
		currencyOptions, 
		selectedCurrency,
		onChangeCurrency,
		onChangeAmount,
		amount
				} = props;

				console.log(typeof amount)

	return (
		<React.Fragment>
			<div className="currency-row">
				<input type="number" className="currency-input" value={parseFloat(amount)} onChange={onChangeAmount} />
				<select value={selectedCurrency} onChange={onChangeCurrency}>
					{currencyOptions.map((option, i) => (
						<option key={i} value={option}>{option}</option>
					))}
				</select>
			</div>
		</React.Fragment>
);
}

export default CurrencyRow;