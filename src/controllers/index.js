const conexion = require('./db.js')

const getAll = async (req, res) => {
  
  let sql = `SELECT * FROM employees`
  conexion.query(sql, (err, rows, fields) => {
      if (err) throw err;
      else {
          res.json(rows)
      }
  })
}

module.exports={
  getAll
}






