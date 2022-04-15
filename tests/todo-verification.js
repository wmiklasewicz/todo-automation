import * as dotEnv from 'dotenv';
import TodoPageHelper from '../page-objects/helpers/todo-page-helper';
import GeneralHelper from '../page-objects/helpers/general-helper';

dotEnv.config();
const dataSet = require('../test-data/test-data.json');

fixture('Todo form verification')
  .page(process.env.GLOBAL_URL)
  .beforeEach(async (t) => {
    await t.resizeWindow(1920, 1080);
  });

dataSet.forEach((data) => {
  test(`Test case 1: Check basic todo actions| data set: ${data.dataSet}`, async () => {
    await GeneralHelper.checkURL(process.env.GLOBAL_URL);
    await TodoPageHelper.createAndVerifyTodoItems([data.todoItemOne, data.todoItemTwo]);
    await GeneralHelper.takeScreenshot();
  });
});

dataSet.forEach((data) => {
  test('Test case 2: Check todo element on the list and verify', async () => {
    await GeneralHelper.checkURL(process.env.GLOBAL_URL);
    await TodoPageHelper.createAndVerifyTodoItems([data.todoItemOne, data.todoItemTwo]);
    await TodoPageHelper.clickTodoTaskItem(0);
    await GeneralHelper.takeScreenshot();
  });
});
