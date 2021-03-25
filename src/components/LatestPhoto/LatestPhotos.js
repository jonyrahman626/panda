import React, { Component } from 'react';
import './LatestPhotos.css';
import axios from 'axios';

class LatestPhotos extends Component {
    state = {
        photos: [],
        page: 1,
        loading: true,
    }

    componentDidMount (){
        axios.get('https://api.unsplash.com/photos/?client_id=30lbu7849dnGgOlcluC9ufK-zLWHxdSaP2GtOpJD2IE&per_page=15&page='+this.state.page).then(
            res => this.setState({
                photos: res.data,
                loading: false,
                page: this.state.page + 1,
            })
        )
    }

    nextPage = (e)=>{

        axios.get('https://api.unsplash.com/photos/?client_id=30lbu7849dnGgOlcluC9ufK-zLWHxdSaP2GtOpJD2IE&per_page=15&page='+this.state.page).then(
            res => this.setState({
                photos: res.data,
                page: this.state.page + 1,
                loading: false,
            })
        )
    }

    render() {
        // console.log(this.state.photos);
        
        if(this.state.loading === false){
            return (
                <React.Fragment>
                    {
                        this.state.photos.map((photo)=>(
                            <div key={photo.id} className="col-lg-4">
                                <div className="single_photo">
                                    <a className="d-block" href="/">
                                        <img className="w-100" height="300" src={photo.urls.small} alt={photo.alt_description}/>
                                        <h4>{photo.alt_description}</h4>
                                        <p>By - {photo.user.first_name} {photo.user.last_name}</p>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
    
                    <div className="col-lg-12 text-center">
                        <div className="show_more">
                            <button onClick={this.nextPage}>Loading Page - {this.state.page}</button>
                        </div>
                    </div>
                </React.Fragment>
            )
        }

        return (
            <div className="pre_loader text-center">
                Loading...
            </div>
        )
        
    }
}

export default LatestPhotos;
