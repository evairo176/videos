import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={this.onFormSubmit}>
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                value={this.state.term}
                onChange={this.onInputChange}
              />
              <span className="input-group-text" id="basic-addon2">
                Total Video {this.props.videos.length}
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
