import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelName: string = "Hilton Hotel";
  numberOfRooms: number = 10;
  hideRooms: boolean = false;
  toggle(): void {
    this.hideRooms = !this.hideRooms;
  }
}
