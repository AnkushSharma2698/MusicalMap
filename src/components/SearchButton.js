import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

class SearchButton extends Component {
  render() {
    return (
      <Button variant="extendedFab" aria-label="delete">
        Search
      </Button>
    );
  }
}

export default SearchButton;
