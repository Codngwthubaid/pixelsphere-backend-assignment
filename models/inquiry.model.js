import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    client: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    category: String,
    city: String,
    date: Date,
    budget: Number,
    referenceImage: String,
    assignedPartners: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    status: {
      type: String,
      enum: ["new", "responded", "booked", "closed"],
      default: "new"
    }
  },
  { timestamps: true }
);

export const Inquiry = mongoose.model("Inquiry", inquirySchema);
