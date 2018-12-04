import React, { Component } from 'react';

class Sitemap extends Component {
    render() {
        return (
            <div>
            <style dangerouslySetInnerHTML={{__html: "\n\n\t\n\t\na:link {\n    color: rgb(71, 77, 79); \n    \n    text-decoration: none;\n}\n\na:visited {\n    color: rgb(71, 77, 79);\n \n    text-decoration: none;\n}\n\na:hover {\n    color: green;\n   \n    text-decoration: none;\n}\n\na:active {\n    color: yellow;\n\n    text-decoration: none;\n}\n* {\n    box-sizing: border-box;\n}\n\np1 {\n    float: left;\n    width: 20%;\n    padding: 20px;\n}\n\n\n\np2 {\n    float: left;\n    padding: 20px;\n    width: 25%;\n}\n\n\nsection:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\np3 {\n    float: left;\n    padding: 20px;\n    width: 25%;\n}\np4 {\n    float: left;\n    padding: 20px;\n    width: 17%;\n}\np5 {\n    float: left;\n    padding: 20px;\n    width: 8%;\n}\n\n\n\nsection:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.head{\n\tfont-size:128%;\n    text-align:center;\n    \n\n}\n\n\n@media (max-width: 600px) {\n    nav, article {\n        width: 100%;\n        height: auto;\n    }\n}\n" }} />
            <pre>{"\n"}{"\n"}<h1 style={{fontFamily: 'verdana, Gadget, sans-serif', fontSize: '180%', textAlign: 'center'}}>Site Map</h1></pre>
            <section>
              <p4>
              </p4>
              <p1 style={{fontSize: '80%'}}>
                <div>
                  <h4 className="head">Learn more</h4>
                  <h1 style={{borderBottom: '1.8px solid LightGray'}} />
                  <p style={{textAlign: 'center'}}>
                    <a style={{fontFamily: 'Arial Black'}} href="https://www.w3schools.com/html/" target="_blank">Promo codes</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.w3schools.com/html/" target="_blank">License</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.w3schools.com/html/" target="_blank">Information</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.w3schools.com/html/" target="_blank">Legal/Privacy</a></p></div>
                <br />
                <div><h4 className="head">Support</h4>
                  <h1 style={{borderBottom: '1.8px solid LightGray'}} />
                  <p style={{textAlign: 'center'}}><a style={{fontFamily: 'Arial Black'}} href="https://www.w3schools.com/html/" target="_blank">Contact us</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.w3schools.com/html/" target="_blank">FAQ</a></p></div>
              </p1>
              <p2 style={{fontSize: '80%'}}>
                <div><h4 className="head">Company</h4>
                  <h1 style={{borderBottom: '1.8px solid LightGray'}} />
                  <p style={{textAlign: 'center'}}><a style={{fontFamily: 'Arial Black'}} href="https://www.w3schools.com/html/" target="_blank">About us</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.w3schools.com/html/" target="_blank">Press</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.w3schools.com/html/" target="_blank">Careers</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.w3schools.com/html/" target="_blank">Terms</a></p></div><br />
                <div><h4 className="head">Photos</h4>
                  <h1 style={{borderBottom: '1.8px solid LightGray'}} />
                  <p style={{textAlign: 'center'}}><a style={{fontFamily: 'Arial Black'}} href="https://www.w3schools.com/html/" target="_blank">Stock photos</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.w3schools.com/html/" target="_blank">Stock illustrations</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.w3schools.com/html/" target="_blank">Stock vector graphics</a></p></div>
              </p2>
              <p3 style={{fontSize: '80%'}}>
                <div><h4 className="head">Social</h4>
                  <h1 style={{borderBottom: '1.8px solid LightGray'}} />
                  <p style={{textAlign: 'center'}}><a style={{fontFamily: 'Arial Black'}} href="https://www.w3schools.com/html/" target="_blank">Facebook</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.w3schools.com/html/" target="_blank">Instagram</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.w3schools.com/html/" target="_blank">Twitter</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.w3schools.com/html/" target="_blank">Google Play</a></p></div><br />
              </p3>
              <p5>
              </p5>
            </section>
            <br /><br /><h1 style={{borderBottom: '1.8px solid LightGray'}} /><br />
            <h1 style={{fontFamily: 'verdana', fontSize: '128%', textAlign: 'center'}}><b>Can't found what you want?</b></h1><br />
            <h2 style={{fontSize: '120%', textAlign: 'center'}}><a style={{fontFamily: 'Arial Black', color: 'green'}} href="https://www.w3schools.com/html/" target="_blank">Contact Us &gt;</a></h2><h2><br /><br />
            </h2></div>
        );
    }
}

export default Sitemap;