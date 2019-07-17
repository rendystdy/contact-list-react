// library
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
  handleDetail = id => {
    console.log(id);
    console.log(this.props);
    this.props.history.push(`/contact-detail/${id}`);
  };

  render() {
    const { name, phone, id } = this.props.contacts;
    const { search } = this.props;
    //  console.log('search', search);
    if (
      search !== "" &&
      name.toLowerCase().indexOf(search.toLowerCase()) === -1 &&
      phone.indexOf(search) === -1
    ) {
      return null;
    }

    return (
      <>
        <div className="p-2">
          <div className="p-2 d-flex flex-row justify-content-start border">
            <h5 className="mr-5">{name}</h5>
            <p className="mr-5">
              <FontAwesomeIcon icon={faMobileAlt} size="lg" className="mr-2" />
              {phone}
            </p>
            <button
              className="btn btn-outline-primary"
              onClick={() => this.handleDetail(id)}
            >
              edit
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Contact);
