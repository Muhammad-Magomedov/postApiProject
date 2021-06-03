const Categories = require('../models/Category')

class categoryController {
    async getCategory(req, res) {
        try {
            const category = await Categories.find({})
            res.json(category);
        } catch (e) {
            res.json(e.message)
        }
    }

    async getCategoryId(req, res) {
        try {
            const category = await Categories.findById({
                _id : req.params.id
            })
            res.json(category)
        } catch (e) {
            res.json(e.message)
        }
    }

    async postCategory(req, res) {
        try {
            const category = new Categories({
                name: req.body.name
            })
            await category.save()
            res.json(category)
        } catch (e) {
            res.json(e.message)
        }
    }

    async deleteCategory(req, res) {
        try {
            const category = await Categories.findByIdAndDelete({
                _id: req.params.id
            })
            res.json(category)
        } catch (e) {
            res.json(e.message)
        }
    }

    async patchCategory(req, res) {
        try {
            const category = await Categories.findByIdAndUpdate(
             req.params.id,
            {name: req.body.name}
            )
            res.json(category)
        } catch (e) {
            res.json(e.message)
        }
    }
}

module.exports = new categoryController();