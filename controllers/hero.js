const Hero = require('../models/hero')

const heroControllers = {
  create: async (req,res) => {
    try {
      const heroData = req.body.hero
      const hero = new Hero(heroData);
      await hero.save();
      res.json({msg:'Created'})
    } catch (error) {
      return res.status(500).json ({msg:error.message})
    }

  },

get: async (req,res) => {
    try {
        const hero = await Hero.find({})

        res.json(hero.reverse())
      } catch (error) {
        return res.status(500).json({msg:error.message})
      }
    },

getById: async (req,res) => {
    try {
          const {id} = req.params
          const hero = await Hero.findById(id)

          res.json(hero)

      } catch (error) {
          return res.status(500).json({msg:error.message})
      }
  },

update: async (req,res) =>{
    try{
        const {id} = req.params
        const hero = req.body.hero

        await Hero.findByIdAndUpdate(id,{
          hero : hero,

        })

        res.json({msg:'Updated'})
    }catch(error){
        console.error(error)
        return res.status(500).json({msg:error.message})
    }
  },

delete: async (req,res)=>{
    try {
        const {id} = req.params
        await Hero.findByIdAndDelete(id)
        res.json({msg:'Deleted'})
    } catch (err) {
        console.error(err)
        return res.status(500).json({msg:err.message})
    }
  },

  }


module.exports = heroControllers



// ({
//   hero : hero,
//   id : id
// })
