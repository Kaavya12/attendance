// import express
const express = require("express");

module.exports = (async function() {
  // import function from controller
  const {
    showSubject,
    showStudent,
    showDate,
    showAttendance,
    delAttendance
    
  } = await require("../controllers/attendance.js");

  // init express router
  const router = express.Router();

  // Get All Product
  router.get("/attendance/person/:student", function(req, res) {
    showStudent(req, res);
  });

  // Get Single Product
  router.get("/attendance/subject/:subject", function(req, res) {
    showSubject(req, res);
  });

  // Create New Record
  router.post("/attendance/add", function(req, res) {
    showAttendance(req, res);
  });

  // Update Product
  router.get("/attendance/date/:date", function(req, res) {
    showDate(req, res);
  });
  
  router.delete("/attendance/delete/:id", function(req, res) {
    delAttendance(req, res);
  })

  // export default router
  return router;
})();
