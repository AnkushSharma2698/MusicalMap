import React, { Component } from 'react';
import '../Styling/SearchButton.css';

class SearchButton extends Component {
  render() {
    return (
      <div>
        <a class="button #1b5e20 green darken-4" href="#">
          Submit
        </a>
      </div>
    );
  }
}

export default SearchButton;

/*
<button
  className="waves-effect waves-black btn #1b5e20 green darken-4"
  type="submit"
  name="action"
>
  Submit
  <i class="material-icons right">send</i>
</button>
*/
