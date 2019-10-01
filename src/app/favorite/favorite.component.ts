import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('isFavorite') isSelected: boolean;
  // tslint:disable-next-line:no-output-native
  // tslint:disable-next-line:no-output-rename
  // tslint:disable-next-line:no-output-native
  @Output('change') click = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected });
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
