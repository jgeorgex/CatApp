var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function() {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open('GET', 'https://api.thecatapi.com/v1/breeds?attach_breed=0');
xhr.setRequestHeader('x-api-key', 'd4649ec1-eb14-4036-84a0-629cc0301a64');

xhr.send(data);

// function ajax_get(url, callback) {
//   var xmlhttp = new XMLHttpRequest();
//   xmlhttp.onreadystatechange = function() {
//     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//       console.log('responseText:' + xmlhttp.responseText);
//       try {
//         var data = JSON.parse(xmlhttp.responseText);
//       } catch (err) {
//         console.log(err.message + ' in ' + xmlhttp.responseText);
//         return;
//       }
//       callback(data);
//     }
//   };

//   xmlhttp.open('GET', url, true);
//   xmlhttp.send();
// }

// ajax_get('https://api.thecatapi.com/v1/breeds?attach_breed=0', function(data) {
//   var selection = Math.floor(Math.random() * 50);
//   document.getElementById('breed').innerHTML = data[selection]['name'];
//   document.getElementById('wikipedia_url').innerHTML =
//     data[selection]['wikipedia_url'];
// });
