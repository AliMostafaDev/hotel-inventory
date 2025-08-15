import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_Service_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi',
      price: 500,
      photos: 'http://images.com',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021')
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'TV, Bathroom, Free Wi-Fi',
      price: 1000,
      photos: 'http://images.com',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021')
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'TV, Bathroom, Free Wi-Fi',
      price: 1500,
      photos: 'http://images.com',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021')
    }
  ]

  constructor(@Inject(APP_Service_CONFIG) private config: AppConfig, private http: HttpClient) {
    console.log(this.config.apiEndpoint);
    console.log('Rooms Service Initialized...');
  }

  getRooms() {
    return this.http.get<RoomList[]>('/api/Rooms');
  }

  addRooms(room: RoomList) {
    return this.http.post<RoomList>('/api/rooms', room);
  }
}
