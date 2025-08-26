const db = require("../db/db");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { title, status, priority, date } = req.body;
  const sql = `INSERT INTO todo(title,priority,status,date) VALUES(?,?,?,?)`;
  db.query(sql, [title, priority, status, date], (err, result) => {
    if (err) {
      console.error("Insert error",err);
      return res.status(500).json({ error: "Insert fail" });
    }
    res.json({ id: result.insertId, title, priority, status, date });
  });
});

router.get("/", (req, res) => {
  const sql = `SELECT * FROM todo`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Insert error");
      return res.status(500).json({ error: "Insert fail" });
    }
    res.json({ result });
  });
});

router.put("/:id", (req, res) => {
    const{id} = req.params;//to access the things with :
    const { title, status, priority, date } = req.body;
  const sql = `UPDATE todo SET title=?, priority=?, status=?,date=? WHERE id = ? `;
  db.query(sql, [title, priority, status, date, id],(err, result) => {
    if (err) {
      console.error("Update error",err);
      return res.status(500).json({ error: "Update fail" });
    }
    res.json({message : "Updted successfully" });
  });
});

router.delete("/:id", (req, res) => {
    const{id} = req.params;
  const sql = `DELETE FROM todo WHERE id=?`;
  db.query(sql, [id],(err, result) => {
    if (err) {
      console.err("Delete error");
      return res.status(500).json({ error: "Delete fail" });
    }
    res.json({message :  "Deleted Sucessfully" });
  });
});
module.exports=router
