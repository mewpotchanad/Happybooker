const { Ebook } = require("../models");
const createError = require("../utils/create-error");

exports.getAllEbook = async (req, res, next) => {
  try {
    const ebooks = await Ebook.findAll();

    res.status(200).json(ebooks);
  } catch (err) {
    next(err);
  }
};

exports.createEbook = async (req, res, next) => {
  try {
    const addEbook = await Ebook.create({
      title: req.body.title,
      image: req.body.image,
      publisher: req.body.publisher,
      author: req.body.author,
      category: req.body.category,
      description: req.body.description
    });

    res.status(200).json({ addEbook });
  } catch (err) {
    next(err);
  }
};

exports.editEbook = async (req, res, next) => {
  const { title, image, publisher, author, category, description } = req.body;
  const value = { title, image, publisher, author, category, description };
  try {
    await Ebook.update(value, {
      where: {
        id: +req.params.ebookId
      }
    });
    res.status(200).json(value);
  } catch (err) {
    next(err);
  }
};

// exports.deleteEbook = async (req, res, next) => {
//   try {
//     const deleteProduct = await Ebook.findOne({
//       where: {
//         id: +req.params.ebookId
//       }
//     });
//     await deleteProduct.destroy();
//     res.status(200).json({ message: "delete success" });
//   } catch (err) {
//     next(err);
//   }
// };
exports.deleteEbook = async (req, res, next) => {
  const { ebookId } = req.params;
  try {
    await Ebook.destroy({
      where: {
        id: ebookId
      }
    });
    res.status(200).json({ message: "delete success" });
  } catch (err) {
    next(err);
  }
};
// const { ebookId } = req.params;
//   try {
//     await Shelf.destroy({
//       where: {
//         ebookId: ebookId
//       }
//     });
