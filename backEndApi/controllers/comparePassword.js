
const bcrypt = require('bcrypt');

const testPassword = 'rahemur@123';
const knownGoodHash = '$2b$10$57zvmA2gB.Sg6f99kqz7/.rcZYbJlZheJntk.oOqHsbYgFlL1DotK'; // Replace with your generated hash

bcrypt.compare(testPassword, knownGoodHash, (err, result) => {
    if (err) throw err;
    console.log('Password Match:', result); // Should be true if the password and hash match
});
