const express = require('express');
const app = express();

//console.log("Hello World");

app.get('/',(req, res) => {
	res.send("Halo");
})

app.listen(3000, () => {
	console.log("lalala");
})