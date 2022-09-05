import mongoose from "mongoose";
import "dotenv/config";

const CMomgoDB = (URL) => {
  const dbURL = URL || process.env.DB_URL;
  mongoose.connect(dbURL);
  const db = mongoose.connection;
  db.on("open", () => {
    console.log(`db open: ${dbURL}`);
  });
};

const CMongooseModel = (model) => {
  const schema = mongoose.Schema(model.model);
  return mongoose.model(model.name, schema);
};

export default CMomgoDB;
export { CMongooseModel };
