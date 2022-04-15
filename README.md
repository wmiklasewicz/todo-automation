## TODOs automation

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
   git clone https://github.com/github_username/repo_name.git
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
    Example1: testcafe .\tests\todo-verification.js
   ```
3. Running tests without html reporting but with output directly in console
   ```sh
    testcafe .\tests\ -r spec
   ```
3. Manual override for browsers with console output, to return to html reports please remove "-r spec"
   ```sh
    testcafe chrome .\tests\ -r spec
   ```
4. Running specific test with browser override can be done in two ways
    ```sh
    testcafe chrome .\tests\{testName} -r spec
    Example: testcafe chrome .\tests\page.js -r spec
     ```
 