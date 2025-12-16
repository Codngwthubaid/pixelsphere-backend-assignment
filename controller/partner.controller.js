import { PartnerProfile } from "../models/partner-profile.model.js";
import { Inquiry } from "../models/inquiry.model.js";
import { Portfolio } from "../models/portfolio.model.js";

export const createProfile = async (req, res) => {
  const profile = await PartnerProfile.create({
    user: req.user.id,
    ...req.body
  });
  res.json(profile);
};

export const getLeads = async (req, res) => {
  const leads = await Inquiry.find({
    assignedPartners: req.user.id
  });
  res.json(leads);
};

export const addPortfolio = async (req, res) => {
  const item = await Portfolio.create({
    partner: req.user.id,
    ...req.body
  });
  res.json(item);
};
