const express = require('express'); 
const app = express();
var fs = require('fs');
var path    = require("path");
var serial = 1;
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/gothigh', (req, res) => {
  var data = "saurabh";
  date = new Date();
  data +=  ' , ' +  date.toString();
  data += serial +'\n'
  serial += 1;
  fs.appendFile('file.csv', data, function (err) {
      if (err) throw err;
      console.log('Saved!');
      res.sendFile(path.join(__dirname+'/haha.html'));
  });
});

app.get('/gethistory', (req, res)=> {
  fs.readFile('file.csv', 'utf8', function(err, data){
    console.log(data);
    res.send(data);
  })
})

app.listen(3000, () => {
  console.log("app listening on port 3000");
})
