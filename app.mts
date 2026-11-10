import { createServer } from 'node:http';
const server = createServer((_request, response) => {
  response.writeHead(200, { 'content-type': 'application/json', 'cache-control': 'no-store' });
  response.end(JSON.stringify({ fixture: 'deployment-port-pr11350', version: 'one', markerPresent: process.env.PORTABILITY_TEST_MARKER === 'fixture-only-marker', platformTokenPresent: Boolean(process.env.POLSIA_API_KEY) }));
});
server.listen(Number(process.env.PORT || 3000), '0.0.0.0');
process.on('SIGTERM', () => server.close(() => process.exit(0)));
