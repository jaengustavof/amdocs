const whitelist = ["http://localhost:3002", "127.0.0.1", "https://localhost:3002"];

let corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    credentials: true,
  }

module.exports = {
    corsOptions
};