import React, { Component } from 'react';

import "./getContact.css";

class getContact extends Component {
    render() {
        return (
            <div>
            

            <div className="container">
              <div className="row col-md-6 col-md-offset-2 custyle">
                <table className="table table-striped custab">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>E-mail</th>
                      <th>Phone Number</th>
                      <th>Message</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody><tr>
                      <td>shan</td>
                      <td>peter@yahoo.com</td>
                      <td>0919282871</td>
                      <td>i want money</td>
                      <td className="text-center"><a className="btn btn-info btn-xs" href="#"><span className="glyphicon glyphicon-edit" /> Edit</a> <a href="#" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove" /> Del</a></td>
                    </tr>
                    <tr>
                      <td>minh</td>
                      <td>s2515151@rmit.edu.vn</td>
                      <td>0909092987</td>
                      <td>Hello, i m minh</td>
                      <td className="text-center"><a className="btn btn-info btn-xs" href="#"><span className="glyphicon glyphicon-edit" /> Edit</a> <a href="#" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove" /> Del</a></td>
                    </tr>
                    <tr>
                      <td>Khanh</td>
                      <td>sswww@gmail.com</td>
                      <td>1980808188</td>
                      <td>LOL I am handsome</td>
                      <td className="text-center"><a className="btn btn-info btn-xs" href="#"><span className="glyphicon glyphicon-edit" /> Edit</a> <a href="#" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove" /> Del</a></td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
          </div>
        );
    }
}

export default getContact;