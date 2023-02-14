const { Ebook, Shelf } = require('../models')

exports.getAllEbook = async (req, res, next) => {
    try {
        const ebooks = await Ebook.findAll()

        res.status(200).json(ebooks)
    } catch (err) {
        next(err)
    }
}

exports.getEbookById = async (req, res, next) => {
    try {
        const ebooks = await Ebook.findOne({
            where: {
                id: req.params.ebookId
            }
        })

        res.status(200).json(ebooks)
    } catch (err) {
        next(err)
    }
}

exports.createEbookToShelf = async (req, res, next) => {
    try {
      const value = req.body

      value.ebookId = req.params.ebookId
      value.userId = req.params.userId

      const shelf = await Shelf.create(value)
      res.status(200).json({shelf})
    } catch (err) {
        next(err)
    }
}

exports.getShowEbookFromShelf = async (req, res, next) => {
    try {
        const user = await Shelf.findAll({
            where: {
                userId: req.params.userId
            },
            include: {
                model: Ebook
            }
        })

        res.status(200).json({user})
    } catch (err) {
        next(err)
    }
}