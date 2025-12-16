import { Review } from "../models/review.model.js";

export const addReview = async (req, res) => {
    const review = await Review.create({
        client: req.user.id,
        partner: req.body.partner,
        rating: req.body.rating,
        comment: req.body.comment
    });

    res.status(201).json(review);
};