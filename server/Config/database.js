const mongoose = require('mongoose');
require('dotenv').config();


const connect = async (DATABASE_URL) => {
  try {
    const dbOptions = {
      dbName: 'employee',
    };
    await mongoose.connect(DATABASE_URL, dbOptions);
    console.log('✅ Database connected successfully');
  } catch (error) {
    console.error('❌ Database connection error:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connect;