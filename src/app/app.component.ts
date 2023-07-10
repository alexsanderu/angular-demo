import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTest';
  public todos: Todo[] = [];
  public titule: String = 'My daily tasks'
  public form: FormGroup;
  

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.required
      ])]
    })
    this.todos.push(new Todo(1, 'hug a boy', false));
    this.todos.push(new Todo(2, 'date with him', false));
    this.todos.push(new Todo(3, 'cook for him', true));
  }
 
  otherTitle() {
    this.titule = 'Completed'
  }

  remove(todo: Todo) {
      const index = this.todos.indexOf(todo);
      if(index !== -1) {
          this.todos.splice(index, 1);
      }
  }

  markAsDone(todo: Todo) {
      todo.done=true;
  }

  markAsUndone(todo: Todo) {
      todo.done=false;
  }
}

