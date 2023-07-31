import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Room, RoomList } from '../rooms';

// There are some rules before you can actually go head and apply changeDetection strategy to 
// your component.
// Default Angular sets : 'changeDetection: ChangeDetectionStrategy.Default';
// On Default Mode : Any event will cause the entire 'changeDetection' to run for your Application.

// 'OnPush' Mode : 
// OnPush ChangeDetection strategy can only be applied in case you are not modifing any Data 
// internally in that particular component, How we can achived it: By using @Input() and @Output.
// Here we are going to apply on 'rooms-list' component because it uses @Input() and @Output,
// So it doesn't change the Data internally, It depends on the Data that is comming from Outside
// source i.e Parent.

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.Default,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges {
  // It will get the Input/Data from parent.
  // What it will Do: It will make 'rooms' property as an valid HTML property on this ('hinv-rooms-list')
  // HTML Element, So will be able to do Property Binding.  
  @Input() rooms: RoomList[] = [];

  @Input() title: string = '';

  // It Pass/Send the Data To Parent Component.
  // It will send/pass the data from child component to parent component.
  // @Output() are actucally an Events.
  // What it will Do: It attached an event named 'selectedRoom' to this ('hinv-rooms-list') HTML tag,
  // then will use 'Event Binding' on parent component.
  @Output() selectedRoom = new EventEmitter<RoomList>();
  ngOnChanges(changes: SimpleChanges): void {
    // Whenever you change your @Input() value that will come as property(changes);
    console.log(changes);
    if (changes['title']) {
      console.log(this.title);
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
