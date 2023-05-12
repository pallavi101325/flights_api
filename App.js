const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const port = process.env.PORT || 3000
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : false}))
app.listen(port , () => {
    console.log('server is listening on port ' + port)
})


var Flight_info = [
    {
       FlightId : 1,
       FlightName : "Indigo",
       Source : "Kolkata",
       Destination : "Bangalore",
       Price : "Rs.5000"
    },
    {
        FlightId : 2,
        FlightName : "Airasia",
        Source : "Kolkata",
        Destination : "Delhi",
        Price : "Rs.8000"
    },
    {
        FlightId : 3,
       FlightName : "Vistara",
       Source : "Delhi",
       Destination : "Mumbai",
       Price : "Rs.9000"
    },
    {
        FlightId : 4,
       FlightName : "Airasia",
       Source : "Kolkata",
       Destination : "Bangalore",
       Price : "Rs.10000"
    },
    {
        FlightId : 5,
       FlightName : "Gofirst",
       Source : "Mumbai",
       Destination : "Bangalore",
       Price : "Rs.4000"
    },
    {
        FlightId : 6,
       FlightName : "Airindia",
       Source : "Mumbai",
       Destination : "Bangalore",
       Price : "Rs.7000"
    },
    {
        FlightId : 7,
       FlightName : "Spicejet",
       Source : "Delhi",
       Destination : "Bangalore",
       Price : "Rs.6000"
    },
    { 
        FlightId : 8,
        FlightName : "Indigo",
        Source : "Delhi",
        Destination : "Bangalore",
        Price : "Rs.8000"
    },
    {
        FlightId : 9,
        FlightName : "Vistara",
        Source : "Kolkata",
        Destination : "Mumbai",
        Price : "Rs.4000"
    },
    {
        FlightId : 10,
        FlightName : "Gofirst",
        Source : "Kolkata",
        Destination : "Mumbai",
        Price : "Rs.2000"
    },
    {
        FlightId : 11,
       FlightName : "Spicejet",
       Source : "Kolkata",
       Destination : "Bangalore",
       Price : "Rs.2000"
    },
    {
        FlightId : 12,
        FlightName : "Airindia",
        Source : "Delhi",
        Destination : "Bangalore",
        Price : "Rs.8000"
    },
]

app.post('/api/getFlights' , (req , res) => {
    var result = {}
    Flight_info.forEach(element => {
        if(element.Source==req.query.Source && element.Destination==req.query.Destination){
            // let ob = { [element.FlightName] : }
            result[[element.FlightName]] = element.Price
            // result.push(ob); 
        }
    })
  res.status(200).json(result);
})