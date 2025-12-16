import { Inquiry } from "../models/inquiry.model.js";
import { matchPartners } from "../services/lead-matching.services.js";

export const createInquiry = async (req, res) => {
  const inquiry = await Inquiry.create({
    client: req.user.id,
    ...req.body,
    assignedPartners: await matchPartners(req.body)
  });
  res.json(inquiry);
};
