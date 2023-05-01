const config = require('./src/database/typeorm.config').default;

module.exports = {
  ...config,
  cli: {
    migrationsDir: 'src/migrations',
  },
};