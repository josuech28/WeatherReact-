import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';



class WeatherList extends Component {
    
    renderWeather(cityData)  {
        const cityName = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat }  = cityData.city.coord;


        return (
            <tr key={cityName}>
                <td id="city-name">
                    <GoogleMap
                        lon={lon}
                        lat={lat}
                     />
                </td>
                <td className="chart-field"> 
                    <Chart data={pressures} color="green" units="hPa" />
                </td>
                <td className="chart-field">
                    <Chart data={temps} color="orange" units="C" />
                </td>
                <td className="chart-field">
                    <Chart data={humidities} color="red" units="%" />
                </td>

            </tr>
        );
    }

    render() {
        return (
            <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Pressure (hPa)</th>
                        <th>Temperature (C)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
            </div>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);