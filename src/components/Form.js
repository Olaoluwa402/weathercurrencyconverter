import React, {Component} from 'react';

import './Form.css';


class Form extends Component {

	constructor (props) {
		super(props);

		this.state = {
			suggestions: [],
			text: '',
			countryText: '',
			countrySuggestions: [],
		};

	};

	cityOnTextChange = (e) => {
		const {cityItems} = this.props;
		const value = e.target.value;
		let suggestions = [];
		if(value.length > 0){
			const regex = new RegExp(`^${value}`, 'i');
			suggestions = cityItems.sort().filter(v => regex.test(v));
		}
		this.setState(() => ({suggestions, text:value}));

	};

	citySuggestionSelected (value) {
		this.setState(() => ({
			text:value,
			suggestions: []
		}))
	}

	renderCitySuggestions () {
		const {suggestions} = this.state;
		if(suggestions.length === 0) {
			return null;
		}
		return (
				<ul>
					{suggestions.map((item) => <li key={item} onClick={() => this.citySuggestionSelected(item)}>{item}</li>)}
				</ul>
			);
	}



	countryOnTextChange = (e) => {
		const {countryItems} = this.props;
		const value = e.target.value;
		let countrySuggestions = [];
		if(value.length > 0){
			const regex = new RegExp(`^${value}`, 'i');
			countrySuggestions = countryItems.sort().filter(v => regex.test(v));
		}
		this.setState(() => ({countrySuggestions, countryText:value}));

	};

	countrySuggestionSelected (value) {
		this.setState(() => ({
			countryText:value,
			countrySuggestions: []
		}))
	}

	renderCountrySuggestions () {
		const {countrySuggestions} = this.state;
		if(countrySuggestions.length === 0) {
			return null;
		}
		return (
				<ul>
					{countrySuggestions.map((item) => <li key={item} onClick={() => this.countrySuggestionSelected(item)}>{item}</li>)}
				</ul>
			);
	}

	render() {
		const {text} = this.state;
		const {countryText} = this.state;
		return (
			<React.Fragment>
				<form onSubmit={this.props.getWeather} id="special-items">
				    <div className="text-wrapper">
				    	<div className="text-wrapper__city">
							<input value={text} onChange={this.cityOnTextChange}  type="text" name="city" placeholder="City..."/>
							{this.renderCitySuggestions()}
						</div>
						<div className="text-wrapper__country">
							<input value={countryText} onChange={this.countryOnTextChange}  type="text" name="country" placeholder="Country..."/>
							{this.renderCountrySuggestions()}
						</div>

				    </div>
					
					
					<button>Get Weather</button>
				</form>
			</React.Fragment>
	);
	}
};


export default Form; 