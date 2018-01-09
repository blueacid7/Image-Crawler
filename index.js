var express=require('express');
var app=express();
var getImageUrls = require('get-image-urls');

app.set('port',(process.env.PORT || 5000));
app.use(express.static(__dirname));

app.get('/',function(request,response){
  response.render('index.html')
});

app.get('/getImages',function(request,response){
  getImageUrls(request.query.url)
      .then(function(images) {
        response.send({results : images});
      })
      .catch(function(e) {
        console.log('ERROR', e);
      });
});

app.listen(app.get('port'),function(){
  console.log('Node app is running on port no.'+app.get('port'));
});
