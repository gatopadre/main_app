import React from 'react';
import '../assets/css/CardModel.scss';

class CardModel extends React.Component{

    render(){
        return (          
            <div className="col">
                <div className="card card-stats">                    
                    <div className="card-body text-center">
                        <h5 className="card-title">Temperatura</h5>
                        <div className="d-flex justify-content-around card-data align-items-center">
                            <div className="min-btn">-</div>
                            <div className="ind-principal">33°</div>
                            <div className="max-btn">+</div>                            
                        </div>
                        <div className="d-flex justify-content-between card-data-resume">
                            <div className="col no-padding card-data-resume-col-min">
                                <h6>Mínima</h6>
                                <h2>33°</h2>
                            </div>                           
                            <div className="col no-padding card-data-resume-col-max">
                                <h6>Máxima</h6>
                                <h2>33°</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default CardModel;