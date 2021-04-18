import React, { Component } from 'react';
import './LatestPhotos.css';
import axios from 'axios';

class LatestPhotos extends Component {
    state = {
        photos: [],
        page: 1,
        loading: true,
        search_query: '',
        searching: false,
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

    searchQuery = (e) =>{
        this.setState({
            search_query: e.target.value,
        })
    }

    
    searchTrigger = (e) => {
        axios.get('https://api.unsplash.com/search/photos/?client_id=30lbu7849dnGgOlcluC9ufK-zLWHxdSaP2GtOpJD2IE&per_page=15&query='+ this.state.search_query +'&page='+this.state.page).then(
            res => this.setState({
                photos: res.data.results,
                page: this.state.page + 1,
                loading: false,
                searching: true,
            }) 
        )

        e.preventDefault();
    }
    

    render() {
        // console.log(this.state.photos);
        
        if(this.state.loading === false){
            return (
                <React.Fragment>
                    <div className="col-lg-6">
                        <h1>Latest  Photos</h1>
                    </div>
                    <div className="col-lg-6 text-end">
                        <div className="header_search">
                            <form onSubmit={this.searchTrigger} action="">
                                <input type="text" value={this.state.search_query} onChange={this.searchQuery} placeholder="Search Here"/>
                                <button type="submit">Search</button>
                            </form>

                        </div>
                    </div>
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
