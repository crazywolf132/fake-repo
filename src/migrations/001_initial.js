// Database migration file
const migration = {
  up: async (db) => {
    await db.createCollection('users');
    await db.collection('users').createIndex({ email: 1 }, { unique: true });
    
    await db.createCollection('sessions');
    await db.collection('sessions').createIndex({ userId: 1 });
    await db.collection('sessions').createIndex({ expiresAt: 1 });
  },
  
  down: async (db) => {
    await db.collection('users').drop();
    await db.collection('sessions').drop();
  }
};

module.exports = migration;