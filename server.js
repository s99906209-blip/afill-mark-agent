const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

const html = Buffer.from(fs.readFileSync('./page.b64', 'utf8').trim(), 'base64').toString('utf8');

app.get('/', (req, res) => res.type('html').send(html));

app.get('/health', (req, res) => {
      res.json({ status: 'ok', service: 'afill-mark-agent', timestamp: new Date().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
      console.log('Afill Mark Agent running on port ' + PORT);
});
