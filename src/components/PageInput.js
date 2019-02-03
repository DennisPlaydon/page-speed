import React, { Component } from "react";

class PageInput extends Component {
  render() {
    return (
      <form className="text-left">
        <input type="text" name="country" placeholder="Url..." />
        <button>Go</button>
      </form>
    );
  }
}
export default PageInput;
