const express = require('express');
const router = express.Router();
const quotesCtrl = require('../../controllers/api/quotes');

router.get('/', quotesCtrl.show)
