const proxy = require('redbird')({
  port: 80,
  ssl: {
    port: 443
  }
})

console.log ('STARTING REVERSE PROXY')

// proxy.register('http://test.645.kebler.net', 'http://trantor.645.kebler.net:8080')
proxy.register('lights.645.kebler.net', 'http://trantor.645.kebler.net',
  {
    ssl: {
      key: 'certs/lights.645.kebler.net.key',
      cert: 'certs/lights.645.kebler.net.crt',
      ca: 'certs/rootKeblerCA.crt'
    }
  })
// proxy.register("https://lights.645.kebler.net", "https://trantor.645.kebler.net");
proxy.register('http://645.kebler.net', 'http://192.168.0.1:8081')
