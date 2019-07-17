// library
import React, { Component } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";

// component
import Search from "../../components/Search/Search";
import Contact from "../../components/Contact/Contact";

// images
import spinner from "../../Spinner-1s-200px.gif";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      search: "",
      isLoading: true
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    setTimeout(() => {
      Axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
          this.setState({
            users: res.data,
            isLoading: false
          });
          //   console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }, 1000);
  };

  handleChange = e => {
    // console.log('handle change', e.target.value);
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.search);
  };
  render() {
    const { users, search, isLoading } = this.state;
    console.log(isLoading);

    return (
      <>
        <div className="container shadow-sm">
          <div className="section-header">
            <div className="bg-light p-2 border bg-dark">
              <h2 className="text-center text-uppercase text-white">
                contact list
              </h2>
            </div>
          </div>
          <Search
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          {isLoading ? (
            <img src={spinner} alt="spinner" className="mx-auto d-block" />
          ) : (
            <div className="section-content">
              <div className="row">
                <div className="col">
                  <div className="d-flex flex-column">
                    {users.map(item => {
                      return (
                        <Contact
                          key={item.id}
                          contacts={item}
                          search={search}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="footer mb-3 mt-2 bg-dark">
            <div className="p-2">
              <p className="text-white text-center">
                &copy; 2019 - Rendy Setiadi
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Home);
