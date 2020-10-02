import React from 'react';

class SearchBar extends React.Component {
  state = { result: '' };

  onInputChange = (e) => {
    this.setState({ result: e.target.value })
    console.log(this.state.result)
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <input
              type="text"
              search="Search here"
              placeholder="Search your name here"
              onChange={this.onInputChange}
            />
          </div>
        </form>
        <h1>{this.state.result}</h1>
      </div>
    );
  }
}

export default SearchBar;
