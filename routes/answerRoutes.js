const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Answers = mongoose.model('Answers');

const router = express.Router();

router.use(requireAuth);

router.post('/answers', async(req,res) => {
    const { answers, optionalAnswers } = req.body;
    
    try {
        const answer =  Answers({ answers, optionalAnswers, userId: req.user._id});
        await answer.save();
        res.send(answer);
        console.log(answer,);
    } catch (err) {
        res.status(422).send({error: err.messange})
    }
    
    
        
})

module.exports = router;