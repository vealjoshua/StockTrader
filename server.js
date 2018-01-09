const AsyncPolling = require('async-polling')
const request = require('request');

const options = {
	url: 'https://api.binance.com/api/v3/ticker/bookTicker'
}

const polling = AsyncPolling (end => {
	request.get(options, function(error, response, body) {
		if (error) {
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          return;
        }

        const jsonObj = JSON.parse(response.body)
        console.log(jsonObj[0])
	})

	end()
}, 1000)

polling.run()
