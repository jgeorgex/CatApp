var jsoncontent = {
  catBreed: 'British Shorthair',
  catName: 'Grumpy Cat'
};

var output = document.getElementById('introduction');

output.innerHTML = jsoncontent.catName + ' - ' + jsoncontent.catBreed;
