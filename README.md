simple url shortener

build

    npm install
    npm start

usage
generating urls

    get req: host/generate?long_url=http://example.com
    response:{"site":["http://www.example.com","bc95771"]}

redirecting urls

    get request: host/s/bc95771
    response will redirect user to destination: http://www.example.com
