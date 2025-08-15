import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  priceFilter = new FormControl(0);

  hotelName: string = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  title = 'Room List';

  roomList: RoomList[] = [];

  selectedRoom!: RoomList;

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>

  constructor(private roomsService: RoomsService, private configService: ConfigService) { }

  ngAfterViewChecked(): void {

  }

  ngAfterViewInit(): void {
    // this.headerComponent.title = 'Roomss View';
    // console.log(this.headerChildrenComponent);
  }

  ngDoCheck(): void {

  }

  ngOnInit(): void {
    console.log(this.headerComponent);
    this.roomsService.getRooms().subscribe(rooms => {this.roomList = rooms});

  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi',
      price: 5200,
      photos: 'http://images.com',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021')
    }

    //this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }

}
