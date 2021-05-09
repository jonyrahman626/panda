import React, { Component } from 'react';
import axios from 'axios';
import './Photo.css';

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
        var photo = this.state.photo;
        return (
            <div>
                <section id="photo_part">
                    <div className="container">
                        {photo.title ? <h3>{photo.title}</h3> : ''}
                        {photo.alt_description ? <h4>{photo.alt_description}</h4> : ''}
                        <div className="row photo_cont">
                            <div className="col-lg-12">
                                <div className="single_photo_conmp">
                                    <ul>
                                        <li><label htmlFor="uploadBy">Uploaded By : </label> {photo.user && photo.user.first_name} {photo.user && photo.user.last_name}</li>
                                        <li><label htmlFor="upDate">Upload Date : </label> {photo.updated_at}</li>
                                        <li><label htmlFor="cmModel">Camera Model : </label> {photo.exif && photo.exif.model}</li>
                                    </ul>
                                    <a href={photo.links && photo.links.download} download target="_blank">Download</a>
                                </div>
                                <img className="w-100" height="800" src={photo.urls && photo.urls.full} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Photo;
