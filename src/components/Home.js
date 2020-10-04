import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  selectBox = () => {
    console.log("selct");
    this.props.actions.selectBox();
  };

  handleCheck = (key, index) => {
    this.props.actions.selectBox(key, index);
  };

  render() {
    return (
      <div style={{ background: "#ba26ff", height: "100vh" }}>
        <div
          style={{
            background: "#FFF",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "30px 300px",
          }}
        >
          <div style={{ color: "#ba26ff", fontSize: 20, fontWeight: 700 }}>
            LOGO
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: 18, margin: "0 12px" }}>Home</div>
            <div style={{ fontSize: 18, margin: "0 12px" }}>My Portfolio</div>
            <div style={{ fontSize: 18, margin: "0 12px" }}>Clients</div>
            <div style={{ fontSize: 18, margin: "0 12px" }}>Get In Touch</div>
          </div>
        </div>

        {/* Card content */}
        <div
          style={{
            margin: "50px 300px 0",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              flex: 0.48,
              height: "80vh",
              background: "white",
              overflow: "scroll",
              borderRadius: 5,
              padding: "10px",
            }}
          >
            {this.props.homeReducer &&
              this.props.homeReducer.HomeReducer &&
              this.props.homeReducer.HomeReducer.data &&
              this.props.homeReducer.HomeReducer.data.map((item, key) => (
                <div key={key} style={{ marginBottom: 20 }}>
                  <div
                    style={{ fontSize: 20, fontWeight: 500, color: "#696669" }}
                  >
                    {item.title}
                  </div>
                  {item.options.map((list, index) => (
                    <div
                      key={index}
                      style={{ display: "flex", padding: "10px 0" }}
                    >
                      <input
                        type="checkbox"
                        id=""
                        name=""
                        value={list.key}
                        checked={list.value}
                        onChange={(e) => {
                          // e.preventDefault();
                          this.handleCheck(key, index);
                        }}
                      ></input>
                      <div>{list.key}</div>
                    </div>
                  ))}
                </div>
              ))}
          </div>

          <div
            style={{
              // display: "flex",
              flex: 0.48,
              height: "80vh",
              background: "white",
              overflow: "scroll",
              borderRadius: 5,
              padding: "10px",
            }}
          >
            {this.props.homeReducer &&
              this.props.homeReducer.HomeReducer &&
              this.props.homeReducer.HomeReducer.data &&
              this.props.homeReducer.HomeReducer.data.map((item, key) => (
                <div key={key} style={{ marginBottom: 20 }}>
                  {item.options.filter((o) => o.value == true).length > 0 ? (
                    <div
                      style={{
                        fontSize: 20,
                        fontWeight: 500,
                        color: "#696669",
                      }}
                    >
                      {item.title}
                    </div>
                  ) : (
                    <div />
                  )}
                  {item.options.map((list, index) =>
                    list.value ? (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: 10,
                          border: 1,
                          borderRadius: 2,
                          backgroundColor: "#f5f5f5",
                          marginTop: 8,
                        }}
                      >
                        <div>{list.key}</div>
                        <div
                          onClick={() => {
                            this.handleCheck(key, index);
                          }}
                          style={{ fontSize: 30 }}
                        >
                          &times;
                        </div>
                      </div>
                    ) : (
                      <div />
                    )
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
