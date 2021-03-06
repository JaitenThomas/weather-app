import React from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import ReactLoading from 'react-loading';
import bg from './img/bg.jpg';

const API_KEY = '259d3ca89dbc5eb363aba91fb17f92b7';

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    loading: false
  };

  getWeather = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if (city && country) {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`
      );
      const data = await api_call.json();

      if (data.main === undefined) {
        return this.setState({
          error: 'Invalid City and/or Country.',
          loading: false
        });
      } else {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: '',
          loading: false
        });
      }
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter the values',
        loading: false
      });
    }
  };

  renderWeather() {
    if (this.state.loading) {
      return <ReactLoading type={'spin'} color={'red'} />;
    }

    return (
      <Weather
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
      />
    );
  }

  render() {
    return (
      <div className="main-container">
        <div className="box1-container">
          <div className="box1-content">
            <Titles />
          </div>
        </div>
        <div className="box2-container">
          <div className="box2-content">
            <Form getWeather={this.getWeather} />
            {this.renderWeather()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
