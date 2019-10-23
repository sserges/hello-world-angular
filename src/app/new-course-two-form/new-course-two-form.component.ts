import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, Form, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course-two-form',
  templateUrl: './new-course-two-form.component.html',
  styleUrls: ['./new-course-two-form.component.css']
})
export class NewCourseTwoFormComponent {

  form = new FormGroup({
    name: new FormControl(),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  });

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }

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
