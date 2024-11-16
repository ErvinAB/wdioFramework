# WebdriverIO Appium Framework

This is a test automation framework for testing Android applications using **WebdriverIO** and **Appium**. It follows the **Page Object Model (POM)** design pattern to organize code for better maintainability.

---

## Features

- Supports Android application testing.
- Organized with Page Object Model (POM).
- Uses **Chai** for assertions.
- Easy to extend and maintain.

---

## Setup

1. Clone the repository:
   ```bash
   git clone //this repo

2. Navigate to directory 
3. Install dependencies
4. Start appium server

5. Running all tests
    npx wdio run ./wdio.conf.js
6. Run a specific test
    npx wdio run ./wdio.conf.js --spec ./test/specs/login.spec.js