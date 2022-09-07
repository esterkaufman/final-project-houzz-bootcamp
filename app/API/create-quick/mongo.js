import mongoose from "mongoose";
import "dotenv/config";

const   mongoDBConnection = (URL) => {
  const dbURL = URL || process.env.DB_URL;
  mongoose.connect(dbURL);
  const db = mongoose.connection;
  db.on("open", () => {
    console.log(`db open: ${dbURL}`);
  });
};

const createMongooseModel = (modelName, model) => {
  const schema = mongoose.Schema(model);
  return mongoose.model(modelName, schema);
};

export default mongoDBConnection;
export { createMongooseModel };
