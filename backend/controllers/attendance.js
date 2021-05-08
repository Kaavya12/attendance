module.exports = (async function() {
  const {
    forSubject,
    forStudent,
    forDate,
    addAttendance,
    delEntry
  } = await require("../models/attendanceModel.js");

  // Get All Products

  const showSubject = (req, res) => {
    forSubject(req.params.subject, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };

  const showStudent = (req, res) => {
    forStudent(req.params.student, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        res.json(results);
      }
    });
  };

  const showDate = (req, res) => {
    forDate(req.params.date, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        res.json(results);
      }
    });
  };

  const showAttendance = (req, res) => {
    const data = req.body;
    console.log(typeof forStudent);
    addAttendance(data, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        res.json(results);
      }
    });
  };
  
  const delAttendance = (req, res) => {
    delEntry(req.params.id, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        res.json(results);
      }
    });
  };

  return {
    showSubject,
    showDate,
    showAttendance,
    showStudent,
    delAttendance
  };
})();
