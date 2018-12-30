import React, { Component } from 'react';

class QandA extends Component {
    render() {
        return (
            <div>
            <style dangerouslySetInnerHTML={{__html: "\n\n\t\n\t\na:link {\n    color: rgb(71, 77, 79); \n    \n    text-decoration: none;\n}\n\na:visited {\n    color: rgb(71, 77, 79);\n \n    text-decoration: none;\n}\n\na:hover {\n    color: green;\n   \n    text-decoration: none;\n}\n\na:active {\n    color: yellow;\n\n    text-decoration: none;\n}\n* {\n    box-sizing: border-box;\n}\n\np1 {\n    float: left;\n    width: 33.3%;\n    padding: 20px;\n}\n\n\n\np2 {\n    float: left;\n    padding: 20px;\n    width: 33.3%;\n}\n\n\nsection:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\np3 {\n    float: left;\n    padding: 20px;\n    width: 33.3%;\n}\n\n\nsection:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.head{\n\tfont-size:128%;\n    \n\n}\n\n\n@media (max-width: 600px) {\n    nav, article {\n        width: 100%;\n        height: auto;\n    }\n}\n" }} />
            <pre>{"\n"}{"\n"}<h1 style={{fontFamily: 'Arial Black, Gadget, sans-serif', fontSize: '180%', textAlign: 'center'}}>Frequently Asked Questions</h1></pre>
            <section>
              <p1>
                <div style={{backgroundColor: 'white', border: '1.5px solid LightGray', padding: 10}}>
                  <h4 className="head">The basics</h4>
                  <p>
                    <a style={{fontFamily: 'Arial Black'}} href="https://www.facebook.com/messages/t/pickframetm" target="_blank">Collections and cost</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.facebook.com/messages/t/pickframetm/" target="_blank">Licensing</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.facebook.com/messages/t/pickframetm" target="_blank">How PickFrame works</a></p></div>
                <br />
                <div style={{backgroundColor: 'white', border: '1.5px solid LightGray', padding: 10}}><h4 className="head">Your account</h4>
                  <p><a style={{fontFamily: 'Arial Black'}} href="https://www.facebook.com/messages/t/pickframetm" target="_blank">Account history</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.facebook.com/messages/t/pickframetm" target="_blank">Account setting</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.facebook.com/messages/t/pickframetm" target="_blank">Password problems</a></p></div>
              </p1>
              <p2>
                <div style={{backgroundColor: 'white', border: '1.5px solid LightGray', padding: 10}}><h4 className="head">Purchasing</h4>
                  <p><a style={{fontFamily: 'Arial Black'}} href="https://www.facebook.com/messages/t/pickframetm" target="_blank">Purchase method</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.facebook.com/messages/t/pickframetm" target="_blank">Pay per download</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.facebook.com/messages/t/pickframetm" target="_blank">Purchase history</a></p></div><br />
                <div style={{backgroundColor: 'white', border: '1.5px solid LightGray', padding: 10}}><h4 className="head">Downloading</h4>
                  <p><a style={{fontFamily: 'Arial Black'}} href="https://www.facebook.com/messages/t/pickframetm" target="_blank">Download instructions</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.facebook.com/messages/t/pickframetm" target="_blank">Download storage</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.facebook.com/messages/t/pickframetm" target="_blank">Image property</a></p></div>
              </p2>
              <p3>
                <div style={{backgroundColor: 'white', border: '1.5px solid LightGray', padding: 10}}><h4 className="head">Area support</h4>
                  <p><a style={{fontFamily: 'Arial Black'}} href="https://www.facebook.com/messages/t/pickframetm" target="_blank">Supporting countries</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.facebook.com/messages/t/pickframetm" target="_blank">local supports</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.facebook.com/messages/t/pickframetm" target="_blank">Area conflict</a></p></div><br />
                <div style={{backgroundColor: 'white', border: '1.5px solid LightGray', padding: 10}}><h4 className="head">Troubleshooting</h4>
                  <p><a style={{fontFamily: 'Arial Black'}} href="https://www.facebook.com/messages/t/pickframetm" target="_blank">Browser issues</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.facebook.com/messages/t/pickframetm" target="_blank">Image issues</a><br /><a style={{fontFamily: 'Arial Black'}} href="https://www.facebook.com/messages/t/pickframetm" target="_blank">Terms violation</a></p></div>
              </p3>
            </section>
            <br /><br /><h1 style={{borderBottom: '1.8px solid LightGray'}} /><br />
            <h1 style={{fontFamily: 'verdana', fontSize: '128%', textAlign: 'center'}}><b>Can't found your answer?</b></h1><br />
            <h2 style={{fontSize: '120%', textAlign: 'center'}}><a style={{fontFamily: 'Arial Black', color: 'green'}} href="http://localhost:3000/Contactus" target="_blank">Contact Us &gt;</a></h2><h2><br /><br />
            </h2></div>
        );
    }
}

export default QandA;