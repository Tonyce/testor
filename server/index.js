const http = require('http');
let hot = require('./hot')

const port = 1234;

http.createServer((req, res) => {
  
  if (req.url === '/hot') {
      
      delete require.cache[require.resolve('./hot')];
      hot = require('./hot')
      console.log(hot);
      res.end('ok')
      return
  }
  res.end(`${hot.hotValue}`);
}).listen(port, () => {
  console.log('server start at', port)
})