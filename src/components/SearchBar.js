import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import '../Styling/SearchBar.css';


class SearchBar extends Component {
  render() {
    return (
      <div className = "parent">
        <form className = 'SearchBar'>
          <TextField
            id='Search'
            label = "Find Artist"
            className = "Search"
            margin= "normal"
          />
        </form>
      </div>
    );
  };
}

export default SearchBar;
