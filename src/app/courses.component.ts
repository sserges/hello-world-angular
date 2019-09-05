import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'app-courses',
    template: `
        <input [(ngModel)]="email"  (keyup.enter)="onKeyUp()" />
    `
})
export class CoursesComponent {
    email = 'me@example.com';

    onKeyUp() {
        console.log(this.email);
    }
}
