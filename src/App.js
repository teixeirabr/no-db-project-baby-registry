import React, { Component } from "react";
import Axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class App extends Component {
  constructor() {
    super();
    this.state = {
      str: "",
      posts: []
    };
  }

  componentDidMount() {
    Axios.get("/api/posts")
      .then(res => {
        // console.log(res.data);
        toast.success("Loading gifts");
        this.setState({
          posts: res.data
        });
      })
      .catch(() => console.log("Get Failed"));
  }
  getGifts = () => {
    Axios.get(`/api/posts`)
      .then(res => {
        // console.log(res);
        this.setState({ posts: res.data });
      })
      .catch(() => console.log("Get Failed"));
  };

  editGifts = (newId, body) => {
    Axios.put(`/api/posts/${newId}`, body);
    console
      .log(body)
      .then(res => {
        // console.log(res);
        toast.success("Edited");
        this.setState({
          posts: res.data
        });
      })
      .catch(() => console.log("Edit failed"));
  };

  deleteGifts = newId => {
    Axios.delete(`/api/posts/${newId}`)
      .then(res => {
        // console.log(res.data);
        toast.error("Deleted");

        this.setState({
          posts: res.data
        });
      })
      .catch(() => console.log("Delete failed"));
  };

  addGifts = body => {
    Axios.post(`/api/posts/`, body)
      .then(res => {
        // console.log(res.data);
        toast.success("Gift Added. Thank you");
        this.setState({
          posts: res.data
        });
      })
      .catch(() => console.log("Post failed"));
  };

  render() {
    // console.log(this.state.posts);
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
