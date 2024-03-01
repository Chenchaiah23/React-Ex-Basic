const express = require('express');
const app = express();
var path = require('path');
const cors = require('cors');
app.use(cors());
// Start the server
const PORT = process.env.PORT || 3000;

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + "data");
// })
app.use(express.static(path.join(__dirname, 'data')));
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});