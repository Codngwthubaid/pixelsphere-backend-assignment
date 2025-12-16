import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    partner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    imageUrl: String,
    description: String,
    index: Number
  },
  { timestamps: true }
);

export const Portfolio = mongoose.model("Portfolio", portfolioSchema);