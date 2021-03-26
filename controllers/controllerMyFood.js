const { Food, User, Favourite } = require('../models')

class ControllerMyFood {
    static showAllList(req, res) {
        let { id, first_name, last_name } = req.session.userId
        Favourite.findAll({
            where : {UserId : id},
            include : [
                {
                    model : Food
                }
            ]
        })
        .then(data => {
            console.log(data, 'mayfoood');
            res.render('myfood', { data, first_name, last_name })
        })
        .catch(err => {
            console.log(err);
            res.send(err)
        })
    }

    static addPage(req, res) {
        let errormsg = req.query;
        Food.findAll()
        .then(data => {
            res.render('addlistfavourite', { data, errormsg })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addPost(req, res) {
        let { FoodId, favListName, listDescription } = req.body;
        let UserId =  req.session.userId.id;

        Favourite.create({ UserId, FoodId, favListName, listDescription })
        .then(data => {
            res.redirect('/myfood')
        })
        .catch(err => {
            // res.send(err)
            let errors = [];
            err.errors.forEach(el => {
                errors.push(el.message)
            });
            res.redirect(`/myfood/add?errors=${errors}`)
        })
    }
}

module.exports = ControllerMyFood;
