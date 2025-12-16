import { Category } from "../models/category.model.js";
import { User } from "../models/user.model.js";
import { PartnerProfile } from "../models/partner-profile.model.js";
import { Inquiry } from "../models/inquiry.model.js";
import { Review } from "../models/review.model.js";

export const stats = async (req, res) => {
  res.json({
    clients: await User.countDocuments({ role: "client" }),
    partners: await User.countDocuments({ role: "partner" }),
    pendingVerifications: await PartnerProfile.countDocuments({
      verificationStatus: "pending"
    }),
    inquiries: await Inquiry.countDocuments()
  });
};

export const verifyPartner = async (req, res) => {
  const profile = await PartnerProfile.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(profile);
};


export const createCategory = async (req, res) => {
  const category = await Category.create(req.body);
  res.status(201).json(category);
};

export const getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

export const updateCategory = async (req, res) => {
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!category)
    return res.status(404).json({ message: "Category not found" });

  res.json(category);
};

export const deleteCategory = async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({ message: "Category deleted successfully" });
};


export const approveReview = async (req, res) => {
  const review = await Review.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!review)
    return res.status(404).json({ message: "Review not found" });

  res.json(review);
};

export const deleteReview = async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.json({ message: "Review deleted successfully" });
};