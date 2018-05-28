/**
	Bismillahirahmanirahim
	TODO:
	- use axios (done)
	- http request to link
	- show the result

	Problem : 
	- use authenticate key 
 */


'use strict';
let baseUrl = "https://brain.intellifi.nl/api/";

const axios = require('axios');

// intelifi resource 

const api = {
	documentation_url: "https://github.com/intellifi-nl/doc-webapi",
	resources: {
		items_url : baseUrl + "items",
		locations_url : baseUrl + "locations",
		services_url : baseUrl + "services",
		presences_url : baseUrl + "presences",
		spots_url : baseUrl + "spots",
		sets_url : baseUrl + "sets",
		events_url : baseUrl + "events",
		subscriptions_url : baseUrl + "subscriptions"
	}
};

console.log(api.resources.items_url);

// get api

// axios.all([
// 	//axios.get(api.resources.items_url),
// 	// axios.get(api.resources.locations_url),
// 	 //axios.get(api.resources.services_url),
// 	 axios.get(api.resources.presences_url),
// 	 //axios.get(api.resources.spots_url),
// 	 //axios.get(api.resources.sets_url),
// 	 //axios.get(api.resources.subscriptions_url),
// 	]).then(axios.spread((respondItem,respondLocation,respondServices,respondPresences,respondSpot,respondSets,respondSubsription) => {
// 		console.log("Respond Item");
// 		console.log(respondItem.data);
// 	})).catch(error => {
// 		console.log(error);
// 	});

axios.get(api.resources.items_url)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
  	console.log("Failed to get..");
    console.log(error);
  });

  function stringify (x) {
    console.log(Object.prototype.toString.call(x));
}



