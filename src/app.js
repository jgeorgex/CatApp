var apikey = config.API_KEY;

var settings = {
  async: true,
  crossDomain: true,
  url: 'https://api.thecatapi.com/v1/breeds?attach_breed=0',
  method: 'GET',
  headers: {
    'x-api-key': '${apikey}'
  }
};

$.ajax(settings).done(function(response) {
  console.log(response);
});
