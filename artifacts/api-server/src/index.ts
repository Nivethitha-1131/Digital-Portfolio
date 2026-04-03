import app from "./app";
import { logger } from "./lib/logger";

const rawPort = process.env["PORT"];

// For Vercel Serverless Functions, we export the app directly
export default app;

// Only start server locally or if PORT is explicitly set
if (rawPort) {
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
