const express = require('express');
const router = express.Router();
const menu = require('./../models/menu');


router.post('/', async(req, res)=>{
    try{
          const data = req.body
          const newmenu = new menu(data);
          const response = await newmenu.save();
          console.log('data saved');
          res.status(200).json(response);

    }catch(err){
         console.log(err);
         res.status(500).json({error: 'Internal server error'});
    }
})

router.get('/', async(req, res)=>{
     try{
           const data = await menu.find();
           console.log('data fetched');
           res.status(200).json(data);

     }catch(err){
         console.log(err);
         res.status(500).json({error: 'Internal server error'});
     }
})

router.get('/:taste', async(req, res)=>{
    try{
          const taste = req.params.taste;
          if (taste == 'spicy' || taste == 'sour' || taste == 'sweet'){

            const response = await menu.find();
            console.log('response fetched');
            res.status(200).json(response);
          }else{
             res.status(404).json({error: 'Invalid taste type'});
          }
    }catch(err){
         console.log(err);
         res.status(500).json({error: 'Internal server error'});
    }
})

router.put('/:id', async(req, res)=>{
    try{
          const menuId = req.params.id;
          const updatedPersonData = req.body
          const response = await menu.findByIdAndUpdate(menuId, updatedPersonData,{
            new: true,
            runValidators: true,
          })
          if (! response){
                  return res.status(404).json({error: 'menu not found'});
          }
    }catch(err){
         console.log(err);
         res.status(500).json({error: 'Internal server error'});
    }
})

module.exports = router;