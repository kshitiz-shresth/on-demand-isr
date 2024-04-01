// pages/api/trigger-revalidate.ts
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Do any necessary logic here to trigger revalidation of the index page
    // For example, you might update a database record or perform an external API request
    // Once the revalidation logic is complete, send a success response
    await res.revalidate("/");
    res.status(200).json({ message: "ISR triggered successfully!" });
  } catch (error) {
    console.error("Error triggering ISR:", error);
    res
      .status(500)
      .json({ message: "Error triggering ISR. See console for details." });
  }
}
