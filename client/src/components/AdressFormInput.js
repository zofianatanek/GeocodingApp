import React from 'react';
import axios from 'axios';

class AdressFormInput extends React.Component {
  getAdress = async () => {
    const url = 'https://capap.gugik.gov.pl/api/fts/hier/pkt/qq';
    const data = [];

    try {
      let adress;
      await axios.post(url, data).then(function (response) {
        adress = response.data._search.tags;
      });
      console.log(adress);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return <button onClick={this.getAdress}>Pobierz dane</button>;
  }
}

export default AdressFormInput;
