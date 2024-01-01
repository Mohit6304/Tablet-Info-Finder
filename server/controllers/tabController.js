const Tablet = require('../models/tablet');

const jwt = require('jsonwebtoken');

const getTablets = async (req, res) => {
  try {
    const tablets = await Tablet.find();
    res.status(200).json(tablets);
  } catch (error) {
    console.error('Error fetching tablets:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getTablet = async (req, res) => {
  try {
    const tablet = await Tablet.findById(req.params.id);
    if (!tablet) {
      return res.status(404).json({ error: 'Tablet not found' });
    }
    res.status(200).json(tablet);
  } catch (error) {
    console.error('Error fetching tablet by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addTablet = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json('Not authenticated!');
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, userInfo) => {
    if (err) {
      return res.status(403).json('Token is not valid!');
    }

    try {
      const { name, activeIngredients, uses, sideEffects, estimatedCost } = req.body;
      const newTablet = new Tablet({
        name,
        activeIngredients,
        uses,
        sideEffects,
        estimatedCost,
        userId: userInfo.id,
      });
      const savedTablet = await newTablet.save();
      res.json(savedTablet);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
};

const deleteTablet = async (req, res) => {
  try {
    const deletedTablet = await Tablet.findByIdAndDelete(req.params.id);
    if (!deletedTablet) {
      return res.status(404).json({ error: 'Tablet not found' });
    }
    res.status(200).json({ message: 'Tablet deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateTablet = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json('Not authenticated!');
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, userInfo) => {
    if (err) {
      return res.status(403).json('Token is not valid!');
    }

    try {
      const { name, activeIngredients, uses, sideEffects, estimatedCost } = req.body;
      const updatedTablet = await Tablet.findByIdAndUpdate(
        req.params.id,
        {
          name,
          activeIngredients,
          uses,
          sideEffects,
          estimatedCost,
          userId: userInfo.id,
        },
        { new: true }
      );
      if (!updatedTablet) {
        return res.status(404).json({ error: 'Tablet not found' });
      }
      res.json(updatedTablet);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
};

const bookmarkTablet = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: 'Not authenticated!' });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, userInfo) => {
    if (err) {
      return res.status(403).json({ error: 'Token is not valid!' });
    }

    try {
      const { tabletId } = req.params;

      // Check if the tablet is already bookmarked by the user
      const isBookmarked = await UserModel.exists({ _id: userInfo.id, bookmarks: tabletId });

      if (isBookmarked) {
        return res.json({ message: 'Tablet already bookmarked' });
      }

      // Add the tablet to the user's bookmarks
      await UserModel.findByIdAndUpdate(userInfo.id, { $push: { bookmarks: tabletId } });

      res.json({ message: 'Tablet bookmarked successfully' });
    } catch (error) {
      console.error('Error bookmarking tablet:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
};

const unbookmarkTablet = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: 'Not authenticated!' });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, userInfo) => {
    if (err) {
      return res.status(403).json({ error: 'Token is not valid!' });
    }

    try {
      const { tabletId } = req.params;

      // Remove the tablet from the user's bookmarks
      await UserModel.findByIdAndUpdate(userInfo.id, { $pull: { bookmarks: tabletId } });

      res.json({ message: 'Tablet removed from bookmarks successfully' });
    } catch (error) {
      console.error('Error removing tablet from bookmarks:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
};

module.exports = {
  getTablets,
  getTablet,
  addTablet,
  deleteTablet,
  updateTablet,
  bookmarkTablet,
  unbookmarkTablet,
};