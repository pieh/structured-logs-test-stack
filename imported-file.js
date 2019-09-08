let Sentry
if (process.env.SENTRY_DSN) {
  Sentry = require("@sentry/node")
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
  })
}

exports.someFunction = () => {
  const error = new Error("sample error")
  if (Sentry) {
    Sentry.captureException(error)
  }
  throw error
}
