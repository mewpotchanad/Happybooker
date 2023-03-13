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
    const value = req.body;

    value.ebookId = req.params.ebookId;

    const ebook = await Ebook.create(value);
    res.status(200).json({ ebook });
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

exports.deleteEbook = async (req, res, next) => {
  try {
    const deleteProduct = await Ebook.findOne({
      where: {
        id: +req.params.ebookId
      }
    });
    await deleteProduct.destroy();
    res.status(200).json({ message: "delete success" });
  } catch (err) {
    next(err);
  }
};
