const axios = require('axios');
const { get } = require('mongoose');

async function getCoordinates(req, res) {
  const street = req.street.slice(6);
  console.log(street);
  let data = {
    reqs: [
      {
        pkt_numer: `${req.number}`,
        ul_pelna: `${street}`,
        miejsc_nazwa: `${req.city}`,
      },
    ],
    useExtServiceIfNotFound: true,
  };
  let url = 'https://testcapap.gugik.gov.pl/api/fts/gc/pkt';
  let coordinates;
  try {
    await axios.post(url, data).then(function (response) {
      const data = response.data[0].single.geometry.coordinates;
      coordinates = data;
    });
    return coordinates;
  } catch (err) {
    console.log(err);
  }
}

getCoordinates();

exports.getCoordinates = getCoordinates;
