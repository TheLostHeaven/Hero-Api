const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const HeroSchema = new Schema({
  _id: {
    type: Number,
    required: true,
    unique: true,
    default: 1
  },

  hero: {
    type: String,
    required: true,
    maxLength: 50
  }




});

// Hook pre-save para generar el ID personalizado antes de guardar el documento
HeroSchema.pre('save', async function (next) {
  if (!this.isNew) {
    // Si el documento ya existe y está siendo actualizado, no generamos un nuevo ID
    return next();
  }

  try {
    const lastRecord = await this.constructor.findOne().sort({ _id: -1 });
    const newId = lastRecord ? lastRecord._id + 1 : 1;
    this._id = newId;
    next();
  } catch (error) {
    next(error);
  }
});


module.exports = mongoose.model("hero", HeroSchema)
