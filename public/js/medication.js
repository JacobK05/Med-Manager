const sequelize = require('../config/connection');
const username = document.getElementById('username');
const password = document.getElementById('password');



async function getMedicationByUserId() {
    const conn = await sequelize.createConnection({
      
    });
    const [rows] = await conn.execute('SELECT * FROM medication_db.medication where user_id=1');
    await conn.end();
  if(username == rows.email && password === rows.password){

  }else{
    
  }
    console.log(rows);
  
  
  }

  getMedicationByUserId();