const express = require('express');
const app = express();
const port = 5000;

app.use(express.json()); // For parsing JSON request bodies

app.post('/api/login', (req, res) => {
  // Handle POST request here
  console.log(req.body); // Print the POST request body to console
  res.redirect('https://sign-in-with-google-ang-build.onrender.com/dashboard/')
});
// app.post('/', (req, res) => {
//    res.send("helo world")
// });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
