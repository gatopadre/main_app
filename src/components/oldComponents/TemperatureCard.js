import React from 'react';

class TemperatureCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data : {
        option : 'carga',
        value : 'loading...'
      }
    }
  }

  async getTemperatureData() {
    let response = await fetch('http://192.168.0.48:8081/temp/read')
    let data = await response.json();
    if (data.option === 'error') {
      data.value = 'No data';
    }
    this.setState({
      data
    })
  }

  async componentDidMount() {
    await setInterval(() => this.getTemperatureData(), 10000)
  }

  render() {
    return (
      /* <!-- Earnings (Monthly) Card Example --> */
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100">
          <div className="card-header">
            <h3 className="h3 ml-md-2">Temperature &deg;C</h3>
          </div>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2 mb-4">
                <div className="text-xm font-weight-bold text-primary text-uppercase mb-1">Now</div>
                <div className="h3 mb-0 font-weight-bold text-gray-800">{this.state.data.value} </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-thermometer-half fa-4x text-gray-300"></i>
              </div>
            </div>
            <div className="row no-gutters align-items-center">
              <div className="col-md-5 mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Max</div>
                <div className="h6 mb-0 font-weight-bold text-gray-800">40</div>
              </div>
              <div className="col-md-5 mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Min</div>
                <div className="h6 mb-0 font-weight-bold text-gray-800">20</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TemperatureCard;