# Stock-screener
Sctock-screener is a personal project to practice my programming skills as well as to develop something that I was interested in and that would have a practical use. This is a type of project that will probably never see completion and I will continue to add features that I would like to have.

## Usage
The projects contains both the Client and Server, which need to be started simultaneously.

To start the Client, inside the ./client directory:
```bash
npm install
npm start
```

For start the Server, inside the ./server directory:
```bash
npm install
npm start
```
You also need to create a *.env* file within the ./server directory and add an [Alpha Vantage](https://www.alphavantage.co/documentation/) api key as such:
```bash
ALPHA_VANTAGE_API=<Your api key here>
```

## Compromises due to API limitations
* The API only allows 5 requests/min, so implementing a continuous search functionality within the Header of the page was currently impractical. It was made into a seperate component within the page
* The search component within Fundamental and Chart headers only takes a companys' symbol ex.: AAPL, MSFT, TSLA, etc.
