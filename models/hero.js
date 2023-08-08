const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const HeroSchema = new Schema({

  heroId:{
    type: Number,
    required: true,
    unique : true
  },
  namehero: {
    type: String,
    required : true,
    maxLength : 30
  },
  imgHero: {
    type: String,
    required : false
  },
  done: {
    type: Boolean,
    required: true,
    default:false
  }

});

const Hero = mongoose.model('Hero', HeroSchema)

module.exports = Hero
