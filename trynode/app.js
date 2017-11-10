'use strict';

const express = require('express');
const PORT = 3456;
const app = express();

app.get('/', (req, res) => {
	res.send('hai!');
});

app.listen(PORT, () => {
	console.log(`the app is listening on port ${PORT}`);
});