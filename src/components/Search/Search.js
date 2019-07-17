import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class Search extends Component {
  render() {
    // console.log('search',this.props);
    const { handleChange, handleSubmit } = this.props;
    return (
      <>
        <div className="section-search mt-2">
          <form className="form-inline p-2">
            {/* <div className="form-group mb-2 width-lg mx-auto">
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon1"
                >
                  Button
                </button>
              </div>
              <input
                type="text"
                className="form-control form-control-lg mr-2"
                placeholder="search"
                arial-label="Search"
                onChange={handleChange}
                aria-describedby="button-addon1"
              />
              <button
                type="submit"
                className="btn btn-light btn-md mb-2"
                onClick={handleSubmit}
              >
                <FontAwesomeIcon icon={faSearch} size="lg" />
              </button>
            </div> */}
            <div className="input-group mx-auto">
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon1"
                  onClick={handleSubmit}
                >
                  <FontAwesomeIcon icon={faSearch} size="lg" />
                </button>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                placeholder="Search By Name, Phone"
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Search;
