import { t } from 'testcafe';
import TodoPage from '../todo-page';

class TodoPageHelper {
  async typeTodoTask(task) {
    await t
      .typeText(TodoPage.todoInputFieldSelector, task)
      .pressKey('enter');
  }

  async verifyTodoTasksText(position, taskName) {
    await t.expect(TodoPage.todoListSelector.nth(position).textContent).contains(taskName);
  }

  async createAndVerifyTodoItems(tasksArray) {
    const tasksNumber = tasksArray.length;

    for (let i = 0; i < tasksNumber; i += 1) {
      this.typeTodoTask(tasksArray[i]);
      this.verifyTodoTasksText(i, tasksArray[i]);
    }
    await t.expect(TodoPage.todoListSelector.count).eql(tasksNumber);
  }

  async clickTodoTaskItem(position) {
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
