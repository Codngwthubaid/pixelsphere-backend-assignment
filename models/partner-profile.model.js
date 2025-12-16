import mongoose from "mongoose";

const partnerProfileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: String,
    city: String,
    categories: [String],
    documents: {
      aadhar: String
    },
    portfolioSamples: [String],
    verificationStatus: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending"
    },
    adminComment: String,
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const PartnerProfile = mongoose.model("PartnerProfile", partnerProfileSchema);
