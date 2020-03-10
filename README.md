This App is a work in progress and subject to change.

Approach<br>

1. Reviewed documentation at https://docs.thecatapi.com/

2. Noted JSON in the documentation so to familiarise myself with that I created a basic web app with HTML and JS to practice creating a basic JSON and parsing it into the view.

3. Used the example code for 'Quickstart - Get a random Kitty' to understand better how GET requests will work with the API. This gets me a simple app that automatically renders a random image of a cat each time the page loads. I think from what I've read because I've not yet included my API key the amount of data (pictures of cats) available is limited. The next step is to use my api key for authentication and access to more data.

4. The authentication section of the documentation https://docs.thecatapi.com/authentication suggests I could tag my API key on to the end of the URL used in my GET request but strongly recommends that I don't as this is not very secure. That makes sense to me so the next step will be to set my API key as the x-api-key header on the GET request. Once I've understood how that works, I can potentially build-out build out more advanced requests that can render on the index.html page. To do that I will need to include additional elements on the index.html page. Next smallest step could be to create a button then create an onClick to refresh the page and render a new cat image. After that perhaps a get request onclick to search by breed.

### Environment settings

To use your own api in this program create a config.js file in the src folder and include:
'''
var config = {
API_KEY: 'ENTER_YOUR_API_KEY_HERE'
};
'''
