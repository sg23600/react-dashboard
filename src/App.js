import React, { Component } from "react"
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap"
import "./App.css"
import Chart from "./components/Chart"
import Calendar from "react-calendar"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Calendar.css"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { CircularProgressbarWithChildren } from "react-circular-progressbar"

import c1 from "./c1.png"

class App extends Component {
  state = {
    date: new Date(),
    value1: 65,
    value2: 65,
  }

  onChange = (date) => this.setState({ date })
  render() {
    return (
      <div className="App">
        <Navbar
          collapseOnSelect
          expand="lg"
          style={{ backgroundColor: "#5c4d8e" }}
          variant="dark"
        >
          <Navbar.Brand href="#home">GYAAN UDAY</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="">Dashboard</Nav.Link>
              <Nav.Link href="">My Task</Nav.Link>
              <Nav.Link href="">My Project</Nav.Link>
              <Nav.Link href="">My Wallet</Nav.Link>
              <Nav.Link href="">History Data</Nav.Link>
              <Nav.Link href="">Invoice</Nav.Link>
              <Nav.Link href="">Help</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div className="row first">
          <div className="col-lg-6 line">
            <div className="buttons">
              <div className="dropdown show">
                <a
                  className="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  2018
                </a>
              </div>
              <div className="dropdown show">
                <a
                  className="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Month
                </a>
              </div>
            </div>

            <Chart />
          </div>
          <div className="col-md-3 circle">
            {/* <Circular /> */}
            <CircularProgressbar value={75} text={`${75}%`} />
            <div className="row circText">
              <p className="col c1">Deposit:</p>
              <p className="col">
                <strong>$20 54 1 875 574</strong>
              </p>
            </div>
            <div className="row circText">
              <p className="col c1">Expense:</p>
              <p className="col">
                <strong>$54 1 875 574</strong>
              </p>
            </div>
            <div className="row circText">
              <p className="col c1">Payable:</p>
              <p className="col">
                <strong>$805 54 1 875 574</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="row second">
          <div className="bar col-lg-2">
            <h5>Monthly Sale</h5>
            <CircularProgressbarWithChildren value={this.state.value1}>
              <img style={{ width: 100, marginTop: -5 }} src={c1} alt="" />
            </CircularProgressbarWithChildren>
            <input
              className="slide"
              type="range"
              min="0"
              max="100"
              name="slider"
              onChange={(e) => {
                this.setState({ value1: e.target.value })
              }}
            />
            <p>{this.state.value1}</p>
          </div>
          <div className="bar col-lg-2">
            <h5>Monthly Sale</h5>
            <CircularProgressbarWithChildren value={this.state.value2}>
              <img style={{ width: 100, marginTop: -5 }} src={c1} alt="" />
            </CircularProgressbarWithChildren>
            <input
              className="slide"
              type="range"
              min="0"
              max="100"
              name="slider"
              onChange={(e) => {
                this.setState({ value2: e.target.value })
              }}
            />
            <p>{this.state.value2}</p>
          </div>
          <div className="col-lg-6">
            <Calendar
              className="Calendar"
              onChange={this.onChange}
              value={this.state.date}
            />
          </div>
        </div>
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossorigin="anonymous"
        ></script>
      </div>
    )
  }
}

export default App
