const { sequelize, DataTypes, Op } = require("sequelize");

module.exports = (async function() {
  const db = await require("../config/database.js");

  //SELECT * from my_table WHERE tags LIKE '%"love"%';

  //For a subject
  const forSubject = (subject, result) => {
    db.findAll({
      where: {
        subject: subject
      }
    })
      .then(queryResult => result(null, queryResult))
      .catch(err => result(err, null));
  };

  //For a student
  const forStudent = (student, result) => {
    const queryParam = `%${student}%`; //"%".concat(student, "%")
    db.findAll({
      where: {
        name: {
          [Op.like]: queryParam
        }
      }
    })
      .then(queryResult => result(null, queryResult))
      .catch(err => result(err, null));
  };

  //For a date
  const forDate = (date, result) => {
    db.findAll({
      where: {
        date: date
      }
    })
      .then(queryResult => result(null, queryResult))
      .catch(err => result(err, null));
  };

  //Add attendance record
  const addAttendance = function (data, result) {
    const add = async (data) => {
      const person = await db.create({
        name: data.name,
        date: data.date,
        subject: data.subject
      });
      console.log(person)
      result(null, person);
    }
    
    add(data);
  };
  
  const delEntry = function (id, result) {
    db.destroy({
      where: {
        id: id
      }
    })
      .then(queryResult => result(null, queryResult))
      .catch(err => result(err, null));
  };

  return {
    forSubject,
    forStudent,
    forDate,
    addAttendance,
    delEntry
  };
})();
