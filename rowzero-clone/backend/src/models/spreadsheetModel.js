const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const spreadsheetSchema = new Schema({
  rows: { type: Array, required: true },
  columns: { type: Array, required: true },
}, {
  timestamps: true,
});

const Spreadsheet = mongoose.model('Spreadsheet', spreadsheetSchema);

module.exports = Spreadsheet;