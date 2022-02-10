import React, { Component } from "react";
import { Button, Label } from "reactstrap";

export default class AddGift extends Component {
  constructor() {
    super();
    this.state = {
      nameInput: "",
      emailInput: "",
      giftsInput: "",
    };
  }

  handleName = (e) => {
    // console.log(e);
    this.setState({
      nameInput: e.target.value,
    });
  };

  handleEmail = (e) => {
    this.setState({
      emailInput: e.target.value,
    });
  };

  handleGifts = (e) => {
    this.setState({
      giftsInput: e.target.value,
    });
  };

  handleAdd = () => {
    let { nameInput, emailInput, giftsInput } = this.state;
    let giftsArray = giftsInput.split(",");
    let body = {
      name: nameInput,
      email: emailInput,
      gifts: giftsArray,
    };
    this.props.addGift(body);
  };

  render() {
    // console.log(this.props);
    return (
      <div className="card text-primary bg-transparent border border-white rounded">
        <ul>
          <li>
            <section className="form-group">
              <h3 className="card-title friends-name">Friend's Name</h3>

              <br></br>

              <input
                className="form-control"
                onChange={this.handleName}
                type="text"
                placeholder={"Name"}
                value={this.state.name}
              />
              <input
                className="form-control"
                onChange={this.handleEmail}
                type="text"
                placeholder={"E-mail"}
              />
              <input
                className="form-control"
                onChange={this.handleGifts}
                type="text"
                placeholder={"Gifts"}
              />
              <hr></hr>
              <Button onClick={this.handleAdd} color="danger">
                ADD
              </Button>
            </section>
          </li>
        </ul>
      </div>
    );
  }
}
