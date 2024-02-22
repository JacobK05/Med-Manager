const sequelize = require('../config/connection');



async function getMedicationByUserId() {
    const conn = await sequelize.createConnection({
      
    });
    const [rows] = await conn.execute('SELECT * FROM medication_db.medication where user_id=1');
    await conn.end();
  
    console.log(rows);
  
  
  }

  getMedicationByUserId();