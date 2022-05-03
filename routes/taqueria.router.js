const express = require('express');
const TaqueriasService = require('../services/taquerias.service');
const router = express.Router();
const service = new TaqueriasService();

router.get('/',async function(req,res,next){

  try{
      res.json(await service.find());
  }catch(error){
      next(error);
  }
});
router.get('/:id',async function(req,res,next){

  try{
      res.json(await service.findOne(req.params.id));
  }catch(error){
      console.error(`Error al obtener el Heroe`,error.message);
      next(error);
  }
});

router.post('/',async function(req,res,next){
  try{
      console.error(req.body);
      res.json(await service.create(req.body));
  }catch(error){
      console.error(`Error mientras se creaba el registro`,
      error.message);
      next(error);
  }
});
router.put('/:id',async function(req,res,next){
  try {
      res.json(await service.update(
          req.params.id,req.body))
  } catch (error) {
      console.error(`Error mientras se creaba el registro`,
      error.message);
      next(error);
  }
});
router.delete('/:id',async function(req,res,next){
  try {
      res.json(await service.delete(
          req.params.id));
  } catch (error) {
      next(error);
  }
});
module.exports=router;
