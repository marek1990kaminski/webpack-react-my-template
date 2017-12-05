import "../css/main.scss";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import component from "./component";

document.body.appendChild(component());

const $el = document.getElementById('randomInt');

$el.addEventListener('click', function () {
    window.alert("a!")
});

console.log('hello form index.js');

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
    }

    render(){
        return(
            <div>
                <p>nowwwwww</p>
            </div>
        );
    }
}


const $container = document.querySelector('.container');

ReactDOM.render(<App/>, $container);