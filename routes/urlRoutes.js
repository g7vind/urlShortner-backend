const express = require('express');
const router = express.Router();
const { handleShortUrl, handleRedirect } = require('../controllers/urlController');

router.post('/shorten', handleShortUrl);
router.get('/redirect/:shortID', handleRedirect); // Ensure this matches the parameter used in handleRedirect

module.exports = router;
