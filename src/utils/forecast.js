const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=05ffae9aa36a43bd44d29b6e974be061&query=${encodeURI(latitude)},${encodeURI(longitude)}&units=f`;

  request({url,json: true}, (error, {body}) => {
    
    const temp = body.current.temperature;
    const degrees = body.current.feelslike;
    const weatherDescription = body.current.weather_descriptions;

    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find a location. Try another search.', undefined)
    } else {
      callback(undefined, `
      Weather Description: ${weatherDescription}
      It is currently ${temp} degrees out. It feels like ${degrees} degress out
      `)
    }

  })
}

module.exports = forecast;