import React from 'react';
import axios from 'axios';

class AdressFormInput extends React.Component {
  state = {
    voivodeships: [],
    selectedVoivodeship: '',
    districts: [],
    selectedDistrict: '',
    communities: [],
    selectedCommunity: '',
    cities: [],
    selectedCity: '',
    streets: [],
    selectedStreet: '',
    numbers: [],
    selectedNumber: [],
  };

  componentDidMount() {
    this.getVoivodeship();
  }

  getVoivodeship = async () => {
    const url = 'https://capap.gugik.gov.pl/api/fts/hier/fdict/pkt/woj';
    const data = [];
    let voivodeships;
    try {
      const response = await axios.post(url, data);
      voivodeships = response.data;
    } catch (err) {
      console.log(err);
    }
    this.setState({ voivodeships: voivodeships });
  };

  getDistricts = async () => {
    const url = 'https://capap.gugik.gov.pl/api/fts/hier/fdict/pkt/pow';
    const data = [
      {
        level: 'woj',
        v: `${this.state.selectedVoivodeship}`,
      },
    ];
    let districts;
    try {
      const response = await axios.post(url, data);
      districts = response.data;
    } catch (err) {
      console.log(err);
    }
    this.setState({ districts: districts });
  };

  getCommunities = async () => {
    const url = 'https://capap.gugik.gov.pl/api/fts/hier/fdict/pkt/gmi';
    const data = [
      {
        level: 'woj',
        v: `${this.state.selectedVoivodeship}`,
      },
      {
        level: 'pow',
        v: `${this.state.selectedDistrict}`,
      },
    ];
    let communities;
    try {
      const response = await axios.post(url, data);
      communities = response.data;
    } catch (err) {
      console.log(err);
    }
    this.setState({ communities: communities });
  };

  getCities = async () => {
    const url = 'https://capap.gugik.gov.pl/api/fts/hier/fdict/pkt/msc';
    const data = [
      {
        level: 'woj',
        v: `${this.state.selectedVoivodeship}`,
      },
      {
        level: 'pow',
        v: `${this.state.selectedDistrict}`,
      },
      {
        level: 'gmi',
        v: `${this.state.selectedCommunity}`,
      },
    ];
    let cities;
    try {
      const response = await axios.post(url, data);
      cities = response.data;
    } catch (err) {
      console.log(err);
    }
    this.setState({ cities: cities });
  };

  getStreets = async () => {
    const url = 'https://capap.gugik.gov.pl/api/fts/hier/fdict/pkt/ulc';
    const data = [
      {
        level: 'woj',
        v: `${this.state.selectedVoivodeship}`,
      },
      {
        level: 'pow',
        v: `${this.state.selectedDistrict}`,
      },
      {
        level: 'gmi',
        v: `${this.state.selectedCommunity}`,
      },
      {
        level: 'msc',
        v: `${this.state.selectedCity}`,
      },
    ];
    let streets;
    try {
      const response = await axios.post(url, data);
      streets = response.data;
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
    this.setState({ streets: streets });
  };

  getNumbers = async () => {
    const url = 'https://capap.gugik.gov.pl/api/fts/hier/fdict/pkt/nr';
    const data = [
      {
        level: 'woj',
        v: `${this.state.selectedVoivodeship}`,
      },
      {
        level: 'pow',
        v: `${this.state.selectedDistrict}`,
      },
      {
        level: 'gmi',
        v: `${this.state.selectedCommunity}`,
      },
      {
        level: 'msc',
        v: `${this.state.selectedCity}`,
      },
      {
        level: 'ulc',
        v: `${this.state.selectedStreet}`,
      },
    ];
    let numbers;
    try {
      const response = await axios.post(url, data);
      numbers = response.data;
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
    this.setState({ numbers: numbers });
  };

  renderVoivodeships() {
    if (this.state.voivodeships.length !== 0) {
      const inputViovodeships = this.state.voivodeships.map((item, index) => {
        return <option value={item.value}> {item.value} </option>;
      });

      return (
        <div style={{ margin: '30px 0' }}>
          <select
            id="voivodeships"
            className="browser-default custom-select"
            onChange={async (e) => {
              await this.setState({ selectedVoivodeship: e.target.value });
              this.props.voivodeshipselect(e);
              console.log(this.state.selectedVoivodeship);
              await this.getDistricts();
            }}
          >
            {inputViovodeships}
          </select>
        </div>
      );
    }
  }
  renderDistricts() {
    if (this.state.districts.length !== 0) {
      const inputDistricts = this.state.districts.map((item, index) => {
        return <option value={item.value}>{item.value}</option>;
      });
      return (
        <div style={{ margin: '30px 0' }}>
          <select
            className="browser-default custom-select"
            onChange={async (e) => {
              await this.setState({ selectedDistrict: e.target.value });
              this.props.districtselect(e);
              console.log(this.state.selectedDistrict);
              await this.getCommunities();
            }}
          >
            {inputDistricts}
          </select>
        </div>
      );
    }
  }

  renderCommunities() {
    if (this.state.communities.length !== 0) {
      const inputCommunities = this.state.communities.map((item, index) => {
        return <option value={item.value}>{item.value}</option>;
      });
      return (
        <div style={{ margin: '30px 0' }}>
          <select
            className="browser-default custom-select"
            onChange={async (e) => {
              await this.setState({ selectedCommunity: e.target.value });
              this.props.communityselect(e);
              console.log(this.state.selectedCommunity);
              await this.getCities();
            }}
          >
            {inputCommunities}
          </select>
        </div>
      );
    }
  }

  renderCities() {
    if (this.state.cities.length !== 0) {
      const inputCities = this.state.cities.map((item, index) => {
        return <option value={item.value}>{item.value}</option>;
      });
      return (
        <div style={{ margin: '30px 0' }}>
          <select
            className="browser-default custom-select"
            onChange={async (e) => {
              await this.setState({ selectedCity: e.target.value });
              this.props.cityselect(e);
              console.log(this.state.selectedCity);
              await this.getStreets();
            }}
          >
            {inputCities}
          </select>
        </div>
      );
    }
  }

  renderStreets() {
    if (this.state.streets.length !== 0) {
      const inputStreets = this.state.streets.map((item, index) => {
        return <option value={item.value}>{item.value}</option>;
      });
      return (
        <div style={{ margin: '30px 0' }}>
          <select
            className="browser-default custom-select"
            onChange={async (e) => {
              await this.setState({ selectedSteert: e.target.value });
              this.props.streetselect(e);
              await this.getNumbers();
            }}
          >
            {inputStreets}
          </select>
        </div>
      );
    }
  }

  renderNumbers() {
    if (this.state.numbers.length !== 0) {
      const inputNumbers = this.state.numbers.map((item, index) => {
        return <option value={item.value}>{item.value}</option>;
      });
      return (
        <div style={{ margin: '30px 0' }}>
          <select
            className="browser-default custom-select"
            onChange={async (e) => {
              await this.setState({ selectedNumber: e.target.value });
              this.props.numberselect(e);
            }}
          >
            {inputNumbers}
          </select>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderVoivodeships()}
        {this.renderDistricts()}
        {this.renderCommunities()}
        {this.renderCities()}
        {this.renderStreets()}
        {this.renderNumbers()}
      </div>
    );
  }
}

export default AdressFormInput;
