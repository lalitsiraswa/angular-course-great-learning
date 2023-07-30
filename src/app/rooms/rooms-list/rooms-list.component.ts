import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room, RoomList } from '../rooms';

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

  // It Pass/Send the Data To Parent Component.
  // It will send/pass the data from child component to parent component.
  // @Output() are actucally an Events.
  // What it will Do: It attached an event named 'selectedRoom' to this ('hinv-rooms-list') HTML tag,
  // then will use 'Event Binding' on parent component.
  @Output() selectedRoom = new EventEmitter<RoomList>();
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
