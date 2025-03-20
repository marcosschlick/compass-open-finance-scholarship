const { createServer } = require('node:http');
const { URL } = require('node:url');

const hostname = '127.0.0.1';
const port = 3000;
let counter = 0;

const server = createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json');

    try {
        const url = new URL(request.url, `http://${hostname}:${port}`);

        if (request.method === 'GET' && url.pathname === '/health-check') {

            const queryParams = Object.fromEntries(url.searchParams.entries());

            response.statusCode = 200;

            response.end(JSON.stringify({
                success: true,
                timestamp: new Date().toISOString()
            }));
        } 
        

        else if (request.method === 'GET' && url.pathname === '/is-prime-number') {

            const queryParams = Object.fromEntries(url.searchParams.entries());

            let isPrime = (num) => {
                num = Number(num)
                let count = 0
                for (i = 1; i <= num; i++) {
                    if(num % i == 0){
                        count++
                    }
                }
                return count == 2 ? true : false
            }

            response.statusCode = 200;
            response.end(JSON.stringify({ isPrime: isPrime(queryParams.number)}));
        }
        
        else if (request.method === 'POST' && url.pathname === '/count') {
            let body = '';

            request.on('data', chunk => {
                body += chunk.toString();
            });

            request.on('end', () => {
                try {
                    const parsedBody = body.length > 0 ? JSON.parse(body) : {};
                    const incrementBy = Number(parsedBody.incrementBy);
                    counter += incrementBy

                    response.statusCode = 200;
                    response.end(JSON.stringify({ counter: counter}));
                } catch (error) {
                    response.statusCode = 400;
                    response.end(JSON.stringify({ error: "Invalid JSON body" }));
                }
            });

        } 
        
        else {
            response.statusCode = 404;
            response.end(JSON.stringify({ error: 'Route not found' }));
        }


    } catch (error) {
        console.error(error)
        response.statusCode = 500;
        response.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});