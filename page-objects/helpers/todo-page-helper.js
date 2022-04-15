import { t } from 'testcafe';
import TodoPage from '../todo-page';

class TodoPageHelper {
  /**
 * Type task into text field
 * @param {String} taskName - todo task we want to type into text field
 * @example
 * import TodoPageHelper from '../page-objects/helpers/todo-page-helper';
 * await TodoPageHelper.typeTodoTask('feed the cat);
 */
  async typeTodoTask(taskName) {
    await t
      .typeText(TodoPage.todoInputFieldSelector, taskName)
      .pressKey('enter');
  }

  /**
 * Verify todo task name
 * @param {Number} position - nth element position we want to verify
 * @param {String} taskName - todo task name we want to verify
 * @example
 * import TodoPageHelper from '../page-objects/helpers/todo-page-helper';
 * await TodoPageHelper.verifyTodoTasksText(1, 'feed the cat);
 */
  async verifyTodoTasksText(position, taskName) {
    await t.expect(TodoPage.todoListSelector.nth(position).textContent).contains(taskName);
  }

  /**
 * Create defined number of todo tasks
 * @param {Array} tasksArray - array of the tasks that we want to create
 * @example
 * import TodoPageHelper from '../page-objects/helpers/todo-page-helper';
 * await TodoPageHelper.createAndVerifyTodoItems(['feed the cat, 'buy some cheese']);
 */
  async createAndVerifyTodoItems(tasksArray) {
    const tasksNumber = tasksArray.length;

    for (let i = 0; i < tasksNumber; i += 1) {
      this.typeTodoTask(tasksArray[i]);
      this.verifyTodoTasksText(i, tasksArray[i]);
    }
    await t.expect(TodoPage.todoListSelector.count).eql(tasksNumber);
  }

  /**
 * Click todo task on desired position and verify it's completed
 * @param {Number} position - element nth position to be clicked and verified
 * @example
 * import TodoPageHelper from '../page-objects/helpers/todo-page-helper';
 * await TodoPageHelper.clickAndVerifyTodoTaskItem(1);
 */
  async clickAndVerifyTodoTaskItem(position) {
    await t
    // Make sure element is not completed before click
      .expect(TodoPage.toogleCheckboxSelector.nth(position).parent('li').withAttribute('class', 'completed').exists)
      .notOk()
      .click(TodoPage.toogleCheckboxSelector.nth(position))
    // Make sure element is completed after click
      .expect(TodoPage.toogleCheckboxSelector.nth(position).parent('li').withAttribute('class', 'completed').exists)
      .ok();
  }
}

export default new TodoPageHelper();
