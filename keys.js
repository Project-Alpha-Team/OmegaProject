console.log('The keys are loaded');

exports.db = {
    user: process.env.DATABASE_USER,
    pass: process.env.DATABASE_PASS,
    host: process.env.DATABASE_HOST
};