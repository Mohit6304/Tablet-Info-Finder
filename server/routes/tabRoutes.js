const express = require('express');
const router = express.Router();
const { getTablets, getTablet, addTablet, updateTablet, deleteTablet } = require('../controllers/tabController');

router.get('/', getTablets);
router.get('/:id', getTablet);
router.post('/add', addTablet);
router.put('/update/:id', updateTablet);
router.delete('/delete/:id', deleteTablet);

module.exports = router;
