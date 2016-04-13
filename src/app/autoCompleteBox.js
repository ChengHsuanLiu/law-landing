import React from 'react';
import ReactDOM from 'react-dom';
import c from 'classnames';

import style from './autoCompleteBox.css';

let SearchBox = React.createClass({
  handleChange: function(){
    this.props.onUserInput(
      this.refs.filterTextInput.value
      );
  },
  handleFocus: function(){
    this.props.onUserFocus(true);
  },
  handleBlur: function(){
    setTimeout(function() {
      this.props.onUserFocus(false);
    }.bind(this), 50)
  },
  render: function(){
    return(
      <div>
        <input type="text"
        placeholder="Search..."
        value={this.props.filterText}
        ref="filterTextInput"
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur} />
      </div>
      )
  },
});


let ItemRow = React.createClass({
  handleClick: function(){
    this.props.onItemClick(this.props.item.name);
    console.log(ReactDOM.findDOMNode(this));
    console.log(this.props.item.name);
  },
  render: function(){
    return(
      <div className={style.autocompleteListRow} onClick={this.handleClick}>
        {this.props.item.name}
      </div>
    )
  },
});

let List = React.createClass({
  handleItemClick: function(item){
    // let item = this.props.listItems[index];
    this.props.onItemClick(item);
    console.log(item);
  },
  render: function(){
    let rows = [];
    let focusState = this.props.focusState;
    // console.log(this.props.focusState);

    if(focusState){
      this.props.listItems.forEach(function(item, index){
        if (item.name.indexOf(this.props.filterText) === -1) {
          return;
        }
        let ref = 'itemRow' + index.toString();
        rows.push(<ItemRow ref={ref} item={item} key={index} onItemClick={this.handleItemClick} />);

      }.bind(this))

      return(
        <div className={style.autocompleteList}>
          {rows}
        </div>
        )

    }else{
      this.props.listItems.forEach(function(item, index){
        if (item.name.indexOf(this.props.filterText) === -1) {
          return;
        }
        let ref = 'itemRow' + index.toString();
        rows.push(<ItemRow ref={ref} item={item} key={index} onItemClick={this.handleItemClick} />);

      }.bind(this))

      return(
        <div className={c(style.autocompleteList, style.hide)}>
          {rows}
        </div>
        )
    }
  },
});

let AutoCompleteBox = React.createClass({
  _loadListItemsFromServer: function(){
    let requestURL = '/data/taiwan.json';
    fetch(requestURL)
      .then((response) => response.text())
      .then((responseData) => {
        // console.log(responseData);
        let listItems = JSON.parse(responseData);
        // console.log(listItems);
        this.setState({
          listItems: listItems,
        })
      })
  },
  handleUserInput: function(filterText){
    this.setState({
      filterText: filterText,
    })
  },
  handleUserFocus: function(focusState){
    this.setState({
      focusState: focusState,
    })
  },
  handleItemClick: function(itemName){
    console.log('woooow' + itemName);
  },
  getInitialState: function(){
    return({
      filterText: '',
      listItems: [],
      focusState: false,
    })
  },
  componentDidMount: function(){
    this._loadListItemsFromServer();
  },
  render: function(){
    return(
      <div className={style.AutoCompleteBox}>
        <SearchBox
        filterText={this.state.filterText}
        focusState={this.state.focusState}
        onUserInput={this.handleUserInput}
        onUserFocus={this.handleUserFocus} />

        <List
        listItems={this.state.listItems}
        focusState={this.state.focusState}
        filterText={this.state.filterText}
        onItemClick={this.handleItemClick}  />
      </div>
      )
  },
});

export default AutoCompleteBox;
