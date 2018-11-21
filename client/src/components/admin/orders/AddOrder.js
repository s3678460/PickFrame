import React, { Component } from "react";

class AddOrder extends Component {
  state = {
    date: "",
    company: "",
    cart: "",
    total: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { date, company, cart, total } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Order</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="text"
                name="date"
                className="form-control form-control-lg"
                placeholder="Enter Date"
                value={date}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                name="company"
                className="form-control form-control-lg"
                placeholder="Enter Company Name"
                value={company}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cart">Cart</label>
              <input
                type="text"
                name="cart"
                className="form-control form-control-lg"
                placeholder="Enter Cart"
                value={cart}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="total">Total Bill</label>
              <input
                type="text"
                name="total"
                className="form-control form-control-lg"
                placeholder="Enter Total Bill"
                value={total}
                onChange={this.onChange}
              />
            </div>
            <input
              type="submit"
              value="Add Order"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddOrder;
