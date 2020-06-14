import React from 'react';
import '../assets/css/CardResume.scss';
import logo from '../assets/images/logo.svg';

class CardResume extends React.Component{

    render(){
        return (
          <div className="card card-resume">
            <div className="card-body d-flex align-items-center flex-column">                  
              <div className="card-header d-flex justify-content-between">
                <div className="col no-padding">
                  <ul>
                    <li>Temperatura <span>33°</span></li>
                    <li>Humedad <span>7%</span></li>
                    <li>Humedad Tierra <span>7%</span></li>
                    <li>Luz <span>1500w</span></li>
                  </ul>
                </div>
                <div className="col no-padding d-flex justify-content-end">
                  <div className="flex-column container-regar">
                    <p className="text-center">Nivel del agua</p>
                    <div className="btn-regar d-flex flex-column">                    
                      <i>icono agua</i>
                      <a href="#" className="btn btn-primary">Regar</a>
                    </div>
                  </div>
                </div>                    
              </div>                  
              <img src={logo} className="card-resume-img img-responsive" alt="..." />
              <h5 className="card-title">Blackberry kush</h5>
              <p className="card-text card-edad">Edad 2 semanas</p>
              <p className="card-text">Necesito que me <span>den mas luz</span></p>
            </div>
          </div>
        );
    }

}

export default CardResume;