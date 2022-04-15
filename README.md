## TODOs automation
![Alt text](resources/feed_cat.png?raw=true "Feed the cat")

## About The Project

Project had been built using automation framework TestCafe, written in Javascript.

### Built With

* []()TestCafe
* []()Javascript
* []()html-reporter

## Getting Started

In order to install TestCafe and run tests you need to do steps below.

### Prerequisites

1. In order to run the project first thing needed is Node.js
   ```sh
   https://nodejs.org/en/
   ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/wmiklasewicz/todo-automation.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. To avoid restarting computer install TestCafe globally
   ```sh
   npm install testcafe -g
   ```
4. For some of windows users there is a need to add policy in powershell in order to run any scripts on machine
   ```sh
   1. Open powerShell console as an administrator
   2. Paste this code: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine

## Usage

Below there are examples of ways that tests could be started
1. Pre configured way to run all tests concurrently for 1 instance of chrome and 1 instance of firefox with html reporting
   ```sh
    testcafe .\tests\ 
   ```
2. Run specific test concurrently for 1 instance of chrome and 1 instance of frefox with html reporting
   ```sh
    testcafe .\tests\{testName}
    Example1: testcafe .\tests\todo-verification.js --reporter html:reports/test-report.html
   ```
3. Running tests without html reporting but with output directly in console
   ```sh
    testcafe .\tests\ -r spec
   ```
4. Manual override for browsers with console output, to return to html reports please remove "-r spec"
   ```sh
    testcafe chrome .\tests\ -r spec
   ```
5. Running specific test with browser override can be done in two ways
    ```sh
    testcafe chrome .\tests\{testName} -r spec
    Example: testcafe chrome .\tests\page.js -r spec
     ```
6. Running tests using defined commands in package.json file
    ```sh
    Headless: npm run chrome:headless-tests-with-html-report
    Non-headless: npm run firefox-tests-with-html-report
     ```
7. Tests that are being run with default html reporter will store its reports in folder report

![Alt text](resources/reports.png?raw=true "Reports")

## Detailed Project Description
 
Project have been developed using 2 main approaches:
1. Page object pattern - this approach complies with DRY rule of programming, thanks to that we can create the project as a set of reusable components. This technique speeds up not only development itself (we have components we can reuse) but also greatly improve experience of future maintenance - update selectors in one place when something will change.

![Alt text](resources/page_object.png?raw=true "Page object")

2. Data driven development - here we try to separate data layer from the code, thich technique improves management of data within the test automation.

3. Generic functions - automated tests are growing, so important thing is create generic functions, which can be reusable e.g. function for adding tasks.

4. Screenshots - there's a function which allow to do a screenshot after desired step

5. Config files
  - .env - contains data related to starting sites links as well as test users if applies
  - .testcaferc.json - config file for testCafe, you can define here everything related to timeouts, concurrency, browsers used and much more.
  - package.json - standard config defining packages that will be downladed after typing `npm i`

## Contact

Wioletta Mikłasewicz - https://www.linkedin.com/in/wioletta-kisielewicz
