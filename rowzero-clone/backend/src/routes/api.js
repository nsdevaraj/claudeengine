const router = require('express').Router();
const spreadsheetController = require('../controllers/spreadsheetController');

router.get('/spreadsheet', spreadsheetController.getSpreadsheetData);
router.post('/spreadsheet', spreadsheetController.updateSpreadsheetData);
router.post('/connect', spreadsheetController.connect);
router.post('/disconnect', spreadsheetController.disconnect);

module.exports = router;