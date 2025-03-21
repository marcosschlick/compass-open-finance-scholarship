const { createServer } = require('node:http');
const { https } = require('node:https');
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
        else if (request.method === 'GET' && url.pathname === '/stock-insight') {
            const queryParams = Object.fromEntries(url.searchParams.entries());
            const https = require('node:https');
            const moeda = queryParams.currency === 'brl' ? 'brl' : 'usd';
        
            https.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${moeda}`, (apiResponse) => {
                let apiResponseData = '';
                apiResponse.on('data', (chunk) => apiResponseData += chunk);
                apiResponse.on('end', () => {
                    const priceData = JSON.parse(apiResponseData); 
                    const valor = priceData.bitcoin[moeda]; 

                    response.statusCode = 200;
                    response.end(JSON.stringify({ 
                        bitcoin: valor, 
                        momento: getPriceMoment(moeda, valor)
                    }));
                });
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

function getPriceMoment(moeda, valor) {
    if (moeda === 'brl') {
        if (valor < 300000) {
            return 'Bom momento para compra!'
        } else if (valor > 300000 && valor < 450000) {
            return 'Preço razoável. Avalie antes de comprar.'
        } else {
            return 'Bitcoin está caro. Pode ser melhor esperar.'
        }
    } else {
        if (valor < 60000) {
            return 'Bom momento para compra!'
        } else if (valor > 60000 && valor < 80000) {
            return 'Preço razoável. Avalie antes de comprar.'
        } else {
            return 'Bitcoin está caro. Pode ser melhor esperar.'
        }
    }
}

/*
BRL:
    < R$300.000: Bom momento para compra!
    Entre R$450.000 e R$300.000: Preço razoável. Avalie antes de comprar.
    > R$450.000: Bitcoin está caro. Pode ser melhor esperar.
USD:
    < $60.000: Bom momento para compra!
    Entre $60.000 e $80.000: Preço razoável. Avalie antes de comprar.
    > $80.000: Bitcoin está caro. Pode ser melhor esperar.

*/