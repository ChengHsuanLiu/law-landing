import React from 'react';
import ReactDOM from 'react-dom';
import c from 'classnames';

import AutoCompleteBox from './autoCompleteBox'

import style from './formBar.css';

let FormBar = React.createClass({
  getInitialState() {
  	return{
  		policeStation: '-1',
  		type: 'choice-2',
	    name: '',
	    phone: '',
  	}
  },
  onPoliceStationChange: function(e){
  	this.setState({policeStation: e.target.value});
  },
  onTypeChange: function(e){
  	this.setState({type: e.target.value});
  },
  onNameChange: function(e) {
    this.setState({name: e.target.value});
  },
  onPhoneChange: function(e) {
    this.setState({phone: e.target.value});
  },
	render() {
		return(
			<div className={style.formBar}>
				<div className={c(style.formBarSection, style.areaSelectBox)}>
          <AutoCompleteBox value={this.state.policeStation} onChange={this.onPoliceStationChange} />
				</div>
				<div className={c(style.formBarSection, style.typeInputBox)}>
					<select required className={style.typeSelect} id="type" value={this.state.type} onChange={this.onTypeChange}>
            <option value="choice-2">交通</option>
            <option value="choice-1">毒品</option>
            <option value="choice-3">其他</option>
					</select>
				</div>
				<div className={c(style.formBarSection, style.nameInputBox)}>
					<input placeholder="您的姓名" className={style.nameInput} id="name" onChange={this.onNameChange} value={this.state.name} />
				</div>
				<div className={c(style.formBarSection, style.phoneInputBox)}>
					<input placeholder="您的電話" className={style.phoneInput} id="phone" onChange={this.onPhoneChange} value={this.state.phone} />
				</div>
				<button id="formBarSubmit" className={style.formBarSubmit}>開始</button>
			</div>
		)
	},
});

export default FormBar;
