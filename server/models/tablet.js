const mongoose = require('mongoose');

const tabletSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    activeIngredients: {
      type: String,
      required: true,
    },
    uses: {
      type: String,
      required: true,
    },
    sideEffects: {
      type: String,
      required: true,
    },
    estimatedCost: {
      type: Number,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user', // Updated to match the model name 'user'
      required: true,
    },
  },
  { timestamps: true }
);

const Tablet = mongoose.model('Tablet', tabletSchema);

module.exports = Tablet;
