import React, { Component } from 'react';
import axios from 'axios';

class Photo extends Component {

     state = {
         photo: [],
         loading: true,
     }

    componentDidMount() {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let photo_id = params.get('id');

        axios.get('https://api.unsplash.com/photos/'+ photo_id +'/?client_id=30lbu7849dnGgOlcluC9ufK-zLWHxdSaP2GtOpJD2IE').then(
            res => this.setState({
                photo: res.data,
                loading: false,
            })
        )
    };
    
    render() {

        console.log(this.state.photo);
        return (
            <div>
                <h1>Single Photo Is Here</h1>
            </div>
        );
    }
}

export default Photo;
