# Automation Exercise - Playwright Test Suite

This project contains end-to-end UI test automation scripts using **[Playwright](https://playwright.dev/)** for the website [https://automationexercise.com](https://automationexercise.com). The tests are written in **JavaScript** and designed to validate major user flows including registration, login, and cart functionality.

---

## ✅ Project Description

The project automates test cases on the `https://automationexercise.com` website, which serves as a mock e-commerce platform for testing practice. Using Playwright, the tests simulate real user actions to ensure that critical functionalities work as expected.

---

## 📋 Test Cases Covered

### ✅ Test Case 1: Register User
- Navigate to the website
- Go to Signup/Login page
- Fill registration form with new user details
- Submit and verify account creation success

### ✅ Test Case 2: Login User
- Navigate to the website
- Go to Signup/Login page
- Enter valid credentials for an existing user
- Verify successful login and redirection to the home page

### ✅ Test Case 3: Add Product to Cart
- Navigate to the website
- Browse products
- Click 'Add to Cart' on a product
- Click 'View Cart'
- Verify product is added with correct price, quantity, and total

---

## 🚀 Setup Instructions

### 1. Install Node.js

Download and install Node.js (LTS version) from https://nodejs.org

Initialize Project

Open terminal or command prompt

Run:


npm init -y
Install Playwright

Run:
npm install -D @playwright/test
Install Browsers


Run Test

To run a test file:
npx playwright test tests/testcase1.spec.js
View Report

After test execution, to open the HTML report:
npx playwright show-report
