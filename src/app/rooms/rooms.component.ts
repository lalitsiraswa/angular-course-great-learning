import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  hotelName: string = "Hilton Hotel";
  numberOfRooms: number = 10;
  hideRooms: boolean = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }
  roomsList: RoomList[] = [];

  constructor() {
    // Constructor should be used when you wan't to inject some services.
    // Constructor should not have any Blocking Code.
  }
  ngOnInit(): void {
    // It is the place where you should write your logic.
    // It can contains Blocking Code.
    // It should be used for Load-Data from some API's or Calling API's.
    // ngOnInit Hook : is something where we are saying that, okay now my component is Initialized,
    // and just after my component initilize you wan't to do anything ,just add that code on
    // ngOnInit Hook.
    this.roomsList = [
      {
        roomNumber: 1,
        roomType: "Delux Room",
        amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
        price: 500,
        photos: "https://www.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_10332581.htm#query=hotel%20room&position=0&from_view=keyword&track=ais",
        checkinTime: new Date('11-July-2023'),
        checkoutTime: new Date('13-July-2023'),
        rating: 4.565736,
      },
      {
        roomNumber: 2,
        roomType: "Delux Room",
        amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
        price: 1000,
        photos: "https://www.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_10332581.htm#query=hotel%20room&position=0&from_view=keyword&track=ais",
        checkinTime: new Date('5-July-2023'),
        checkoutTime: new Date('7-July-2023'),
        rating: 3.485768,
      },
      {
        roomNumber: 3,
        roomType: "Private Suite",
        amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
        price: 15000,
        photos: "https://www.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_10332581.htm#query=hotel%20room&position=0&from_view=keyword&track=ais",
        checkinTime: new Date('5-July-2023'),
        checkoutTime: new Date('7-July-2023'),
        rating: 2.663557,
      }
    ];
  }

  toggle(): void {
    this.hideRooms = !this.hideRooms;
  }
}
