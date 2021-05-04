import React from 'react';
import LatestPhotos from '../LatestPhoto/LatestPhotos';
import Banner from '../Banner/Banner';

const Index = () => {
    return (
        <div>
            <Banner />
            <div className="content_blog">
                <div className="container">
                    <div className="row">
                        <LatestPhotos />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
