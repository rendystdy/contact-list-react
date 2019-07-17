// library
import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Axios from "axios";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// images
import spinner from "../../Spinner-1s-200px.gif";

class DetailContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetail: {},
      address: {},
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.getDetailUser();
    }, 1000);
  }

  getDetailUser = () => {
    let id = this.props.match.params.id;
    Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        this.setState({
          userDetail: res.data,
          address: res.data.address,
          isLoading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    //  console.log("address", this.state.address);
    const { name, phone } = this.state.userDetail;
    const { address, isLoading } = this.state;
   //   console.log('address',isLoading);

    return (
      <>
        <div className="container">
          <div className="section-header bg-dark p-2">
            <h3 className="text-white text-center text-uppercase">
              Detail contact
            </h3>
          </div>
          {isLoading ? (
            <img src={spinner} alt="spinner" className="mx-auto d-block" />
          ) : (
            <>
              <div className="content mt-2">
                <div className="profil">
                  <FontAwesomeIcon
                    className="img-thumbnail mx-auto d-block"
                    icon={faUser}
                    size="9x"
                  />
                </div>
                <div className="biodata mt-2">
                  <p className="bg-light p-2 border">Name: {name}</p>
                  <p className="bg-light p-2 border">Phone: {phone}</p>
                  <p className="bg-light p-2 border">
                    Address : {address.street} - {address.city} -{" "}
                    {address.zipcode}{" "}
                  </p>
                </div>
              </div>
              <Link to="/" className="btn btn-success">
                Back Home
              </Link>
            </>
          )}
        </div>
      </>
    );
  }
}

export default withRouter(DetailContactPage);
