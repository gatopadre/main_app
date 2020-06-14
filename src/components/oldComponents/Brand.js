import React from 'react';

class Brand extends React.Component{

    render(){
        return (
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-seedling"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Smart Plant <sup>v0.1</sup></div>
            </a>
        );
    }

}

export default Brand;