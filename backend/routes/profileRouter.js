import { Router } from "express";

export const profileRouter = Router();

profileRouter.get("/", async (req, res) => {
  console.log("Fetching profiles...");
  const { page } = req.query;
  try {
    const response = await fetch(
      `https://randomuser.me/api/?page=${page}&results=12`
    );
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching profiles:", error);
    res.status(500).json({ message: "Error fetching profiles" });
  }
});
