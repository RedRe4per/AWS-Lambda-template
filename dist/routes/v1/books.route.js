'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = require('express');
const router = (0, express_1.Router)();
router.get('/', async (req, res) => {
  try {
    res
      .status(200)
      .json("let's find something. Test in AWS Lambda now! final test, 123");
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});
router.get('/:id', async (req, res) => {
  try {
    res.status(200).json({ test: 1 });
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});
router.post('/', async (req, res) => {
  try {
    res.status(201).json({});
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});
router.put('/:id', async (req, res) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});
router.delete('/:id', async (req, res) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});
exports.default = router;
