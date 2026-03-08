import Database from "better-sqlite3";
try {
  const db = new Database("agro.db");
  const banners = db.prepare("SELECT * FROM banners").all();
  console.log(JSON.stringify(banners, null, 2));
  db.close();
} catch (e) {
  console.error("Failed to initialize database", e);
  process.exit(1);
}
