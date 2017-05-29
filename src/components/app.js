import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import Heading from './heading';

export default class App extends Component {
  render() {
    return (
      <div>
        <Heading title="Weather Conditions Sunny-Chill" />
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
