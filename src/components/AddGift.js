import React, { Component } from "react";

export default class AddGift extends Component {
  constructor() {
    super();
    this.state = {
      nameInput: "",
      emailInput: "",
      giftsInput: ""
    };
  }

  handleName = e => {
    // console.log(e);
    this.setState({
      nameInput: e.target.value
    });
  };

  handleEmail = e => {
    this.setState({
      emailInput: e.target.value
    });
  };

  handleGifts = e => {
    this.setState({
      giftsInput: e.target.value
    });
  };

  handleAdd = () => {
    let { nameInput, emailInput, giftsInput } = this.state;
    let giftsArray = giftsInput.split(",");
    let body = {
      name: nameInput,
      email: emailInput,
      gifts: giftsArray
    };
    this.props.addGift(body);
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <ul>
          <li>
            <section className="inputGifts">
              <p className="input-title">Friend's Name</p>
              <input
                onChange={this.handleName}
                type="text"
                placeholder={"Name"}
                value={this.state.name}
              />
              <input
                onChange={this.handleEmail}
                type="text"
                placeholder={"E-mail"}
              />
              <input
                onChange={this.handleGifts}
                type="text"
                placeholder={"Gifts"}
              />
              <button onClick={this.handleAdd} className="bubbly-button">
                ADD
              </button>
            </section>
          </li>
        </ul>
      </div>
    );
  }
}
