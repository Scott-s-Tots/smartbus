const mqtt = require('mqtt');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://anshuman_29:9351919275@cluster0.kydim.mongodb.net/groupproject', {useNewUrlParser: true, useUnifiedTopology: true });
const express = require('express');
const bodyParser = require('body-parser');
const Device = require('./models/user-emails');
const app = express();
app.use(express.static('public'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const port = 5001;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
    extended: true
}));

const client = mqtt.connect("mqtt://broker.hivemq.com:1883");

client.on('connect', () => {
    client.subscribe('/2010993024/#'); 
    console.log('mqtt connected');
});

client.on('message', (topic, message) => {
  if (topic == '/2010993024/sirhind') {
    const data = message.toString();
    console.log(data);
    
    Device.findOne({"City": "Sirhind" }, (err, device) => {
      if (err) {
        console.log(err)
      }
      
       const  sensorData  = device.Email;
       const email  = data; 
    

       sensorData.push(email);
       device.sensorData = sensorData;
       console.log("pushed")
       device.save(err => {
        if (err) {
          console.log(err)
        }
      });
    });

   
  
   }

   else if(topic == '/2010993024/chandigarh'){

    const data = message.toString();
    console.log(data);
    
    Device.findOne({"City": "Chandigarh" }, (err, device) => {
      if (err) {
        console.log(err)
      }
      
       const  sensorData  = device.Email;
       const email  = data; 
    

       sensorData.push(email);
       device.sensorData = sensorData;
       console.log("pushed")
       device.save(err => {
        if (err) {
          console.log(err)
        }
      });
    });

   }

   else if(topic == '/2010993024/ambala'){
    const data = message.toString();
    console.log(data);
    
    Device.findOne({"City": "Ambala" }, (err, device) => {
      if (err) {
        console.log(err)
      }
      
       const  sensorData  = device.Email;
       const email  = data; 
    

       sensorData.push(email);
       device.sensorData = sensorData;
       console.log("pushed")
       device.save(err => {
        if (err) {
          console.log(err)
        }
      });
    });


  }

  else if(topic == '/2010993024/panchkula'){
    const data = message.toString();
    console.log(data);
    
    Device.findOne({"City": "Panchkula" }, (err, device) => {
      if (err) {
        console.log(err)
      }
      
       const  sensorData  = device.Email;
       const email  = data; 
    

       sensorData.push(email);
       device.sensorData = sensorData;
       console.log("pushed")
       device.save(err => {
        if (err) {
          console.log(err)
        }
      });
    });
  }

  else if(topic == '/2010993024/patiala'){
    const data = message.toString();
    console.log(data);
    
    Device.findOne({"City": "Patiala" }, (err, device) => {
      if (err) {
        console.log(err)
      }
      
       const  sensorData  = device.Email;
       const email  = data; 
    

       sensorData.push(email);
       device.sensorData = sensorData;
       console.log("pushed")
       device.save(err => {
        if (err) {
          console.log(err)
        }
      });
    });
  }

  else if(topic == '/2010993024/ludhiana'){

    const data = message.toString();
    console.log(data);
    
    Device.findOne({"City": "Ludhiana" }, (err, device) => {
      if (err) {
        console.log(err)
      }
      
       const  sensorData  = device.Email;
       const email  = data; 
    

       sensorData.push(email);
       device.sensorData = sensorData;
       console.log("pushed")
       device.save(err => {
        if (err) {
          console.log(err)
        }
      });
    });

  }




});


// app.post('/send-command', (req, res) => {
//   const { deviceId, command }  = req.body;
//   const topic = `/myid/command/${deviceId}`;
//   client.publish(topic, command, () => {
//     res.send('published new message');
//   });
// });

// app.put('/sensor-data', (req, res) => {
//   const { deviceId }  = req.body;

//   const [lat, lon] = randomCoordinates().split(", ");
//   const ts = new Date().getTime();
//   const loc = { lat, lon };
//   min = Math.ceil(20);
//   max = Math.floor(50);
//   temp = Math.floor(Math.random() * (max - min + 1) + min);

//   const topic = `/sensorData`;
//   const message = JSON.stringify({ deviceId, ts, loc, temp });

//   client.publish(topic, message, () => {
//     res.send('published new message');
//   });
// });

app.listen(port, () => { 
    console.log(`listening on port ${port}`);
});