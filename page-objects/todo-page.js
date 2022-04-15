import { Selector } from 'testcafe';

class TodoPage {
  get todoInputFieldSelector() {
    return Selector('input').withAttribute('class', 'new-todo');
  }

  get todoListSelector() {
    return Selector('ul').withAttribute('class', 'todo-list').child('li');
  }

  get toggleCheckboxSelector() {
    return Selector('input').withAttribute('class', 'toggle');
  }

  get todoTaskCompletedSelector() {
    return Selector('li').withAttribute('class', 'completed');
  }
}

export default new TodoPage();
