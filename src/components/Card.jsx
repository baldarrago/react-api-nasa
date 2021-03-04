import React from 'react';

const Card = ({ info }) => {

    return (
        <div className="col-sm-12 col-lg-4 mb-3">
            <div className="card">
                <div className="bg-transparent">
                    <img
                        src={info.links[0].href}
                        className='card-img-top img-fluid'
                        alt='...'
                        style={{ maxHeight: '100%' }}
                    />
                </div>

                <div className="card-body">
                    <h5 className="card-title">{info.data[0].title}</h5>
                    <p className="card-text">{info.data[0].description}</p>
                </div>
                <div className="card-footer bg-transparent">{info.data[0].date_created}</div>
            </div>
        </div>
    );
};

export default Card;
