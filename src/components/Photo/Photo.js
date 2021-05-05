import React, { Component } from 'react';

class Photo extends Component {

    componentDidMount() {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let foo = params.get('id');
        console.log(foo);
    };
    
    render() {
        return (
            <div>
                <h1>Single Photo Is Here</h1>
            </div>
        );
    }
}

export default Photo;
