import React, { Component } from "react";
import pin from "../purplePin.png";
import editPin from "../editPin.png";
import editOne from "../editOne.png";

export default class Gift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      email: this.props.email,
      gifts: this.props.gifts,
      id: this.props.id,
      edit: false,
    };
  }

  turnOnEdit = () => {
    this.setState({
      edit: true,
    });
  };

  turnOffEdit = () => {
    this.setState({
      edit: false,
    });
  };

  handleNameInput = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleEmailInput = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleGiftsInput = (e) => {
    this.setState({
      gifts: e.target.value,
    });
  };

  giftEditSubmit = () => {
    let giftsArray = this.state.gifts.split(",");
    this.turnOffEdit();
    console.log("debugandoo", this.state);
    this.props.editGifts(this.state.id, {
      name: this.state.name,
      email: this.state.email,
      gifts: this.state.gifts,
      id: this.state.id,
    });
  };

  renderGifts = () => {
    console.log("amlt", this.props);
    return <span>{this.props.gifts}</span>;
  };

  render() {
    // let giftMap = this.props.gifts.map((gift) => {
    //   return <span key={gift.id}> {gift},</span>;
    // });
    // console.log(giftMap);
    // console.log(this.state);
    return (
      <li>
        <a href="#">
          {this.state.edit ? (
            <div>
              <img width={"50px"} src={editPin} alt="hello" />
              <input
                type="text"
                onChange={this.handleNameInput}
                value={this.state.name}
              />
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleEmailInput}
              />
              <input
                type="text"
                value={this.state.gifts}
                onChange={this.handleGiftsInput}
              />
              <button className="bubbly-button" onClick={this.turnOffEdit}>
                Cancel
              </button>
              <button className="bubbly-button" onClick={this.giftEditSubmit}>
                Submit
              </button>
            </div>
          ) : (
            <div>
              <img
                onClick={() => this.props.delete(this.props.id)}
                width={"40px"}
                src={pin}
                alt="deletePin"
              />
              <p>Name: {this.props.name}</p>
              <p>Email: {this.props.email}</p>
              <p>Gifts: {this.renderGifts()}</p>
              {/* <button onClick={() => this.props.delete(this.props.id)}>
                Delete
              </button> */}
              <img
                onClick={this.turnOnEdit}
                src={editOne}
                width={"50px"}
                alt="edit post front"
              />
              {/* <button onClick={this.turnOnEdit}>Edit</button> */}
            </div>
          )}
        </a>
      </li>
    );
  }
}
