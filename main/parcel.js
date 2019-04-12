const Bundler = require('parcel-bundler');
const { resolve } = require('path');
const internalIp = require('internal-ip');
const getPort = require('get-port');
const carlo = require('./carlo');

const entryFiles = resolve(__dirname, '../src/index.html');

function getAddress() {
  return Promise.all([
    internalIp.v4(), // 优先使用局域网 IP
    getPort()
  ]);
}

async function starter(entry) {
  const [host, port] = await getAddress();

  await new Bundler(entry).serve(port, false, host);

  carlo(host, port);
}

starter(entryFiles);
