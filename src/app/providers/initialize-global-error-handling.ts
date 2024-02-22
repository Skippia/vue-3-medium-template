export function initializeGlobalErrorHandling(app: ReturnType<typeof createApp>) {
  app.config.errorHandler = function (err, vm, info) {
    console.error('ERRORR!!', err, vm, info)
  }

  window.onerror = function (message, source, lineno, colno, error) {
    console.error('error message:', { message, source, lineno, colno, error })
  }
}
