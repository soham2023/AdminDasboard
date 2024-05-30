const bcrypt = require('bcrypt');

const passwordToHash = 'rahemur@123';

bcrypt.hash(passwordToHash, 10, (err, hash) => {
    if (err) throw err;
    console.log('Generated Hash:', hash);
    // Use this hash in the comparison script below
});
