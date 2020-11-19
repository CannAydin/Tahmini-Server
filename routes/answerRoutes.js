const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Answers = mongoose.model('Answers');

const router = express.Router();

router.use(requireAuth);

router.post('/answers', async (req, res) => {
    const {
        element
    } = req.body;
    try {
        var list = [];
        for (let i = 0; i < element.length; i++) {
            let elementi = element[i];
            var ans = elementi.answers;
            var oa = elementi.optionalAnswers;
            const answer =  Answers({ answers: ans, optionalAnswers: oa, userId: req.user._id});
            await answer.save(); 
            console.log(answer);
            list.push(answer);
        }
        Answers.findById("buraya _id gelir", function (err, answers) {console.log("testlendiniz", answers)});

        res.send(list);
    } catch (err) {
        res.status(422).send({
            error: err.messange
        })
    }



})

module.exports = router;