import React from 'react';
import axios from 'axios';

class AdressFormInput extends React.Component {
  state = { voivodeships: [], voivodeship: '' };

  componentDidMount() {
    this.getVoivodeship().then(); //to check
  }
  getVoivodeship = async () => {
    const url = 'https://capap.gugik.gov.pl/api/fts/hier/fdict/dze/woj';
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

  render() {
    let input;

    if (this.state.voivodeships.length !== 0) {
      const input = this.state.voivodeships.map((item, index) => {
        return <option value={item.value}> {item.value} </option>;
      });

      return (
        <select
          className="browser-default custom-select"
          onChange={(e) => this.props.onChange(e)}
        >
          {input}
        </select>
      );
    }
    return <div>{input}</div>;
  }
}

export default AdressFormInput;
