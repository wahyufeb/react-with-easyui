import React from "react";
import { Label, CheckBox, SearchBox } from "rc-easyui";

const styleSearch = {
  width: 500,
  height: 40,
  marginLeft: "50%",
  transform: "translate(-50%,0%)",
  marginTop: "20%"
};

const styleCentang = {
  marginLeft: "28%",
  marginTop: "10px",
  transform: "translate(-50%,0%)"
};

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  handleSearch = ({ value }) => {
    this.setState({ value: value });
  };

  handleClear = () => {
    this.setState({ value: null });
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <SearchBox
          style={styleSearch}
          placeholder="Search Here"
          value={value}
          onSearch={this.handleSearch}
          addonRight={() => (
            <span
              className="textbox-icon icon-clear"
              title="Clear value"
              onClick={this.handleClear}
            ></span>
          )}
        />
      </div>
    );
  }
}

export class Centang extends React.Component {
  render() {
    return (
      <div>
        <CheckBox values="styleSearchasdas" style={styleCentang} />
        <Label style={{ width: 400, marginTop: "10px" }}>
          Open Search Resut In New Tab
        </Label>
      </div>
    );
  }
}
