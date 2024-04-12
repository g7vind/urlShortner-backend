const express = require('express');
const router = express.Router();
const { handleShortUrl, handleRedirect } = require('../controllers/urlController');

router.post('/', handleShortUrl);
router.get('/:shortID', handleRedirect); // Ensure this matches the parameter used in handleRedirect

module.exports = router;
