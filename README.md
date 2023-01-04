## Getting Started

This is an steps instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.


### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app._


1. Clone the repo
   ```sh
   git clone https://github.com/rickyxrohman/Automation-MCPayment-MochaJS.git
   ```
2. Install NPM packages
   ```sh
   npm install && npm install mocha && npm install chai && npm instal mochawesome && npm install crypto-js && npm install supertest
   ```
3. Enter your folder in `Automation-MCPayment-MochaJS` and RUN :

* MacOs and Linux
   ```js
   npx mocha ./tests/script/api-transaction.js
   ```
* Windows
   ```js
   npx mocha .\tests\script\api-transaction.js
   ```
4. How to Run and Report :

* MacOs and Linux
   ```js
   npx mocha ./tests/script/api-transaction.js --reporter mochawesome
   ```
* Windows
   ```js
   npx mocha .\tests\script\api-transaction.js --reporter mochawesome

5. How to Open `mochawesome-report` :

* Click `mochawesome.html` open with browser
   ```sh
   Automation-MCPayment-MochaJS/mochawesome-report/mochawesome.html
   ```

