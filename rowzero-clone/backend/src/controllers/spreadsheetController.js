const Spreadsheet = require('../models/spreadsheetModel');

exports.getSpreadsheetData = async (req, res) => {
  try {
    const spreadsheetData = await Spreadsheet.findOne();
    res.json(spreadsheetData);
  } catch (error) {
    res.status(400).json('Error: ' + error);
  }
};

exports.updateSpreadsheetData = async (req, res) => {
  try {
    const { rows, columns } = req.body;
    const updatedSpreadsheet = await Spreadsheet.findOneAndUpdate(
      {},
      { rows, columns },
      { new: true, upsert: true }
    );
    res.json(updatedSpreadsheet);
  } catch (error) {
    res.status(400).json('Error: ' + error);
  }
};

exports.connect = async (req, res) => {
  // Implement connection logic here
  res.json({ message: 'Connected successfully' });
};

exports.disconnect = async (req, res) => {
  // Implement disconnection logic here
  res.json({ message: 'Disconnected successfully' });
};