import express from "express";
import cors from "cors";
import type { IncomingMessage, ServerResponse } from "http";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.json({ message: "API Server is running" });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// For Vercel Serverless Functions
export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
) {
  try {
    return app(req, res);
  } catch (error) {
    console.error("Handler error:", error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}

// For local development
const rawPort = process.env["PORT"];
if (rawPort && process.env.NODE_ENV !== "production") {
  const port = Number(rawPort);

  if (Number.isNaN(port) || port <= 0) {
    throw new Error(`Invalid PORT value: "${rawPort}"`);
  }

  app.listen(port, (err: any) => {
    if (err) {
      console.error("Error listening on port:", err);
      process.exit(1);
    }

    console.log("Server listening on port:", port);
  });
}
