import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'app-courses',
    template: `
      {{ text|summary:10 }}
    `
})
export class CoursesComponent {
    text = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis numquam nostrum volupt
    atibus beatae molestias, illum ut consequatur similique nam exercitationem,
    quos magni! Placeat, quam obcaecati nobis voluptas minima reprehenderit esse?
    `;
}
