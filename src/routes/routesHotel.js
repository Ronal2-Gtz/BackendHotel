const express = require("express");
const dataHotels = require("../../data/data.json");

const app = express()

app.get("/listHotels", async (req, res) => {
    const imgIcons = `${req.protocol}://${req.get('Host')}/img/icons/amenities/`;
    const imgHotels = `${req.protocol}://${req.get('Host')}/img/images/hotels/`;
    res.json({
        urlImg: {
          imgHotels,
          imgIcons
        },
        Hotels: dataHotels
    });
  });
  
  app.get("/listHotels/:nameFilter", (req, res) => {
    const nameFilter = req.params.nameFilter;
    const hotels = dataHotels.filter((hotel) => {
      return hotel.name.indexOf(nameFilter) > -1;
    });
    res.json({ hotels });
  });
  
  
  module.exports = app