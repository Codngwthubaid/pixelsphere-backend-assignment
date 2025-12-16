import { PartnerProfile } from "../models/partner-profile.model.js";

export const matchPartners = async ({ category, city }) => {
  const partners = await PartnerProfile.find({
    categories: category,
    city,
    verificationStatus: "verified"
  });
  return partners.map((p) => p.user);
};
