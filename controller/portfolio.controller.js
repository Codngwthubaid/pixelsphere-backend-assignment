import { Portfolio } from "../models/portfolio.model.js";

export const createPortfolio = async (req, res, next) => {
  try {
    const portfolio = await Portfolio.create({
      partner: req.user.id,
      imageUrl: req.body.imageUrl,
      description: req.body.description,
      index: req.body.index
    });

    res.status(201).json(portfolio);
  } catch (err) {
    next(err);
  }
};

export const getPortfolio = async (req, res, next) => {
  try {
    const items = await Portfolio.find({ partner: req.user.id }).sort("index");
    res.json(items);
  } catch (err) {
    next(err);
  }
};

export const updatePortfolio = async (req, res, next) => {
  try {
    const item = await Portfolio.findOneAndUpdate(
      { _id: req.params.id, partner: req.user.id },
      req.body,
      { new: true }
    );

    if (!item)
      return res.status(404).json({ message: "Portfolio item not found" });

    res.json(item);
  } catch (err) {
    next(err);
  }
};

export const deletePortfolio = async (req, res, next) => {
  try {
    await Portfolio.findOneAndDelete({
      _id: req.params.id,
      partner: req.user.id
    });

    res.json({ message: "Portfolio deleted successfully" });
  } catch (err) {
    next(err);
  }
};
