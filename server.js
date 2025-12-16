import express from "express";
import cors from "cors";
import morgan from "morgan";

import { connectDB } from "./config/db.js";
import { rateLimiter } from "./middlewares/rate-limit.middleware.js";
import { errorHandler } from "./middlewares/error.middleware.js";

import authRoutes from "./routes/auth.routes.js";
import partnerRoutes from "./routes/partner.routes.js";
import inquiryRoutes from "./routes/inquiry.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import reviewRoutes from "./routes/review.routes.js";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(rateLimiter);

app.use("/api/auth", authRoutes);
app.use("/api/partner", partnerRoutes);
app.use("/api/inquiry", inquiryRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/reviews", reviewRoutes);

app.use(errorHandler);

if (process.env.NODE_ENV !== "production") app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))


app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);

