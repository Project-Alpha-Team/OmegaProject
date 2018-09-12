var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var url = require('url');
var fs = require('fs');
const fileUpload = require('express-fileupload');
var crypto = require('crypto');
var request = require('request');
var path = require("path");
// var Email = require("./app/models/email.js");
var emailRouter = require("./emailRoutes.js");
module.exports = function(app) {



app.use(fileUpload());
app.use(emailRouter);


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
    res.render("index");
    console.log("index loaded \n")
  });
  
  app.get("/app/public/images/bg-masthead.jpg", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/images/bg-masthead.jpg"));
  
  });
  
  app.get("/contact", function (req, res) {
    res.render("contact");
  
  });
  
  
  /* **************************************************************************** */
  /* **************************************************************************** */
  
  
  var defaultOptions = {
    host: 'identify-us-west-2.acrcloud.com',
    endpoint: '/v1/identify',
    signature_version: '1',
    data_type: 'audio',
    secure: true,
    access_key: '56d44c76773d0636b3513c042565f59f',
    access_secret: 'QuTokIWm4ua1SXvutMpmpxa0qURHu0j97kqzYy8E'
  };
  
  function buildStringToSign(method, uri, accessKey, dataType, signatureVersion, timestamp) {
    console.log("buildString successfully executed.. \n");
    return [method, uri, accessKey, dataType, signatureVersion, timestamp].join('\n');
  }
  
  function sign(signString, accessSecret) {
    return crypto.createHmac('sha1', accessSecret)
      .update(new Buffer(signString, 'utf-8'))
      .digest().toString('base64');
  }
  
  /* ************************************* */
  /* identify function start */
  function identify(data, options, cb) {
    console.log('identify function executed....\n ....\n');
    var current_data = new Date();
    var timestamp = current_data.getTime() / 1000;
  
    var stringToSign = buildStringToSign('POST',
      options.endpoint,
      options.access_key,
      options.data_type,
      options.signature_version,
      timestamp);
  
    var signature = sign(stringToSign, options.access_secret);
  
    var formData = {
      sample: data,
      access_key: options.access_key,
      data_type: options.data_type,
      signature_version: options.signature_version,
      signature: signature,
      sample_bytes: data.length,
      timestamp: timestamp,
    }
    request.post({
      url: "http://" + options.host + options.endpoint,
      method: 'POST',
      formData: formData
    }, cb);
  }
  /*identify function ends here */
  /* ************************************* */
  
  //var bitmap = fs.readFileSync('song.mp3');
  
  
  
  app.post('/file_search', function (req, res) {
    var new_object = {
      message: "",
      artist: "",
      trackname: "",
      spotifyURL: "",
  
    }
    console.log("file search initited ...\n");
    if (!req.files)
      return res.status(400).send('No files were uploaded.');
  
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile.data;
    console.log("file successfully uploaded\n");
    console.log('sampleFile:  ', req.files);
    identify(new Buffer(sampleFile), defaultOptions, function (err, httpResponse, body) {
      if (err) console.log(err);
  
      const data = JSON.parse(body);
      console.log("\n\n Song Identified\n \n ******\n \n Artist: " + data.metadata.music[0].artists[0].name);
      var sptrackid = data.metadata.music[0].external_metadata.spotify.track.id;
      var trackname = data.metadata.music[0].external_metadata.spotify.track.name;
      var spotifytrackurl = "http://open.spotify.com/track/" + sptrackid;
  
      new_object.message = "success";
      new_object.artist = data.metadata.music[0].artists[0].name;
      new_object.trackname = trackname;
      new_object.spotifyURL = spotifytrackurl;
      console.log(new_object);
      res.json(new_object);
    });
  
  });
  app.post('/voice_search', function (req, res) {
    console.log("file search initited ...\n");
    var new_object = {
      message: "",
      artist: "",
      trackname: "",
      spotifyURL: "",
  
    }
    if (!req.files)
      return res.status(400).send('No files were uploaded.');
  
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.data.data;
    console.log("file successfully uploaded\n");
    console.log("received File (audio blob) :\n");
    console.log('sampleFile:  ', req.files);
    identify(new Buffer(sampleFile), defaultOptions, function (err, httpResponse, body) {
      if (err) console.log(err);
  
      const data = JSON.parse(body);
      console.log(data)
      if (data.status.msg === "No result")
        console.log("we couldn't identify song");
      else {
        console.log("\n\n **** \n \n Data from ACR cloud\n ******\nData : ", data);
        console.log("\n\n Song Identified\n \n ******\n \n Artist: " + data.metadata.music[0].artists[0].name);
        var sptrackid = data.metadata.music[0].external_metadata.spotify.track.id;
        var trackname = data.metadata.music[0].external_metadata.spotify.track.name;
        var spotifytrackurl = "http://open.spotify.com/track/" + sptrackid;
  
        new_object.message = "success";
        new_object.artist = data.metadata.music[0].artists[0].name;
        new_object.trackname = trackname;
        new_object.spotifyURL = spotifytrackurl;
  
        console.log(new_object);
        console.log('this data should render');
        res.json(new_object);
      }
    });
  
  
  });
  
  /* **************************************************************************** */
  
  
  
  
  /* *******************************   EMAIL SYSTEM   ********************************************* */
  app.post('/api/new_email', function(req, res) {
    console.log('resuest: ', req.body);
    console.log('resuest: ', req.body);
    res.json(req.body);
  })
  
  // require("./app/routes/emailRoutes.js")(app);
  
} 