import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'app-courses',
    template: `
        <input (keyup.enter)="onKeyUp()" />
    `
})
export class CoursesComponent {
    onKeyUp() {
        console.log('ENTER was pressed');
    }
}
