require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/Routes');
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 30
		}
	})
);


mongoose.set('runValidators', true);
mongoose.connect(process.env.MONGODB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
});

mongoose.connection.on('error', err => console.error('MongoDB connection error:', err));
mongoose.connection.on('open', () => console.log('Connected to MongoDB Atlas'));

app.use(routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));