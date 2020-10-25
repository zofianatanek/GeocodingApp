const axios = require('axios');

async function getCoordinates(req, res) {
  let data = {
    reqs: [
      {
        pkt_numer: `${req.number}`,
        pkt_kodPocztowy: `${req.zipcode}`,
        ul_pelna: `${req.street}`,
        miejsc_nazwa: `${req.city}`,
      },
    ],
    useExtServiceIfNotFound: true,
  };
  let url = 'https://testcapap.gugik.gov.pl/api/fts/gc/pkt';
  let coordinates;
  await axios.post(url, data).then(function (response) {
    const data = response.data[0].single.geometry.coordinates;
    coordinates = data;
  });
  return coordinates;
}

exports.getCoordinates = getCoordinates;
