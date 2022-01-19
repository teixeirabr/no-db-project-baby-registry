import React, { Component } from "react";
import Axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const babyGift = [
  {
    id: 0,
    name: "Andre Teixeira",
    email: "andrenone@gmail.com",
    gifts: ["Rocking Chair", "Dresser"],
  },
  {
    id: 1,
    name: "Flavia Teixeira",
    email: "flavianone@gmail.com",
    gifts: ["Baby Monitor", "Lamp"],
  },
  {
    id: 2,
    name: "Carla Teixeira",
    email: "flavia@gmail.com",
    gifts: ["Bottle", "Sweater"],
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      str: "",
      posts: babyGift,
    };
  }

  // componentDidMount() {
  //   Axios.get("/api/posts")
  //     .then((res) => {
  //       // console.log(res.data);
  //       toast.success("Loading gifts");
  //       this.setState({
  //         posts: res.data,
  //       });
  //     })
  //     .catch(() => console.log("Get Failed"));
  // }

  getGifts = () => {
    Axios.get(`/api/posts`)
      .then((res) => {
        // console.log(res);
        this.setState({ posts: res.data });
      })
      .catch(() => console.log("Get Failed"));
  };

  editGifts = (newId, body) => {
    console.log("here is the body", body);
    Axios.put(`/api/posts/${newId}`, body)
      .then((res) => {
        // console.log(res);
        toast.success("Edited");
        this.setState({
          posts: res.data,
        });
      })
      .catch(() => console.log("Edit failed"));
  };

  deleteGifts = (newId) => {
    Axios.delete(`/api/posts/${newId}`)
      .then((res) => {
        // console.log(res.data);
        toast.error("Deleted");

        this.setState({
          posts: res.data,
        });
      })
      .catch(() => console.log("Delete failed"));
  };

  addGifts = (body) => {
    Axios.post(`/api/posts/`, body)
      .then((res) => {
        // console.log(res.data);
        toast.success("Gift Added. Thank you");
        this.setState({
          posts: res.data,
        });
      })
      .catch(() => console.log("Post failed"));
  };

  render() {
    if (this.state.posts.length === 0) {
      return null;
    }
    console.log("rendering", this.state.posts);
    return (
      <div className="App">
        <Header />
        <Main
          posts={this.state.posts}
          addGift={this.addGifts}
          deleteGift={this.deleteGifts}
          editGifts={this.editGifts}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
