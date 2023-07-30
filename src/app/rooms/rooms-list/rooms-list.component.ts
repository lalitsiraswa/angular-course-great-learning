import { Component, Input } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent {
  // It will get the Input/Data from parent.
  // What it will Do: It will make 'rooms' property as an valid HTML property on this ('hinv-rooms-list')
  // HTML Element, So will be able to do Property Binding.  
  @Input() rooms: RoomList[] = [];
}
