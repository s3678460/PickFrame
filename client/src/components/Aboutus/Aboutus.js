import React, { Component } from 'react';

class Aboutus extends Component {
    render() {
        return (
            <div style={{backgroundColor: 'rgba(192,192,192,0.3)', padding: 30, margin: 50}}>
        <h1 style={{textAlign: 'center', fontSize: '300%'}}>About us</h1>
        <p1><p2 style={{fontSize: '200%'}}>Aim</p2><br />
          On the verge of the fourth industrial revolution,
          our main aim in this project is to build a online 
          marketplace where passionate photographers can be
          able to satisfy their demands by selling photos that
          are taken by them. In another aspect, small businesses
          have a chance to own licensed photos and use them 
          legally in any projects. Through that, PickFrame will be a useful
          tool to change customer behavior in which whenever you 
          run a business, owning something with a license is
          absolutely necessary for your business and the domestic market.
          <br /><br />
          <p2 style={{fontSize: '200%'}}>Goals</p2><br />
          Platform Goals (Service and Product outcomes)
          A platform to connect artists and businesses interested 
          in stock photos and illustrations. Thus, a minimal viable
          product for PickFrame should be where transactions can take 
          place easily and conveniently.
          As a website that provides licensed photos, security plays
          an important role for this project. Firstly, terms and 
          conditions to join our platform from contributors and 
          from who to buy our photos  have to be precisely legislated
          by us to make sure that is the only photo is used to sell 
          and contributors can not use it somewhere else. By the same 
          token with buyers, the website will demand the name of a
          company that owns photos, hence there is only that company
          can be able to use the photos. Secondly, administrators will take responsibility to manage all the contents which are posted on
          the website. Admin accounts will be given to each member of
          Oasis team and after the photos are uploaded by contributors,
          the photos will be processed in the system queue to wait for
          authorization and verification. Based on several given requirements, administrators will review and decide which photos match with
          all the requirements or which should be forbidden.
        </p1>
      </div>
        );
    }
}

export default Aboutus;