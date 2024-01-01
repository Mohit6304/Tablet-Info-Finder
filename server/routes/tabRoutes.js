const express = require('express');
const router = express.Router();
const { getTablets, getTablet, addTablet, updateTablet, deleteTablet , bookmarkTablet,unbookmarkTablet} = require('../controllers/tabController');

router.get('/', getTablets);
router.get('/:id', getTablet);
router.post('/add', addTablet);
router.put('/update/:id', updateTablet);
router.delete('/delete/:id', deleteTablet);
router.post('/bookmark/:tabletId', bookmarkTablet);
router.post('/unbookmark/:tabletId', unbookmarkTablet);

module.exports = router;
