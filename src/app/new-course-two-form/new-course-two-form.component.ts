import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, Form } from '@angular/forms';

@Component({
  selector: 'app-new-course-two-form',
  templateUrl: './new-course-two-form.component.html',
  styleUrls: ['./new-course-two-form.component.css']
})
export class NewCourseTwoFormComponent {

  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

}
