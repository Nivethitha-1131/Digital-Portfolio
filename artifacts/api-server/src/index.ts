import app from "./app";
import { logger } from "./lib/logger";
import type { IncomingMessage, ServerResponse } from "http";

// For Vercel Serverless Functions - handler signature
export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
) {
  try {
    return app(req, res);
  } catch (error) {
    logger.error({ error }, "Handler error");
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
      logger.error({ err }, "Error listening on port");
      process.exit(1);
    }

    logger.info({ port }, "Server listening");
  });
}
