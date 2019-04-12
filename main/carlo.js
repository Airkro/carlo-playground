const carlo = require('carlo');

module.exports = async function createCarlo(host, port) {
  // Launch the browser.
  const app = await carlo.launch({
    title: 'Carlo Playground'
  });

  // Terminate Node.js process on app window closing.
  app.on('exit', () => process.exit());

  // Expose 'env' function in the web environment.
  await app.exposeFunction('env', () => process.env);

  // Navigate to the main page of your app.
  await app.load(`http://${host}:${port}`);

  return app;
};
