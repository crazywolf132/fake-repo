// User model
class User {
  constructor(id, email, passwordHash) {
    this.id = id;
    this.email = email;
    this.passwordHash = passwordHash;
    this.createdAt = new Date();
  }

  toJSON() {
    const { passwordHash, ...user } = this;
    return user;
  }
}

const users = new Map();

function createUser(email, passwordHash) {
  const id = Date.now().toString();
  const user = new User(id, email, passwordHash);
  users.set(id, user);
  return user;
}

function getUserById(id) {
  return users.get(id);
}

function getUserByEmail(email) {
  for (const user of users.values()) {
    if (user.email === email) return user;
  }
  return null;
}

module.exports = {
  User,
  createUser,
  getUserById,
  getUserByEmail
};