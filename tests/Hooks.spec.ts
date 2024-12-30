// Hooks 

// test.beforeAll() - This function will run before running any of the test cases
// test.afterAll() - This function will run after running all the test cases
// test.beforeEach() - This function will run before running each test cases
// test.afterEach() - This function will run after running each test cases

import { test, expect } from '@playwright/test';


test.beforeAll(async () => {
    console.log('Before All');
  });

test.beforeEach(async () => {
    console.log('Before Each');
  });   

test.afterEach(async () => {
    console.log('After Each');
  });

test.afterAll(async () => {
    console.log('After All');
  });

test('First Test', async ()=>{
    console.log("First Test")
})
test('Second Test', async ()=>{
    console.log("Second Test")
    })
test('Third Test', async () => {
    console.log("Third Test");
})


