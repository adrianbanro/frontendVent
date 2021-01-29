import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/tutorials';

const spotUrl = 'http://localhost:8080/api/tutorials/spots';

const bookingUrl = 'http://localhost:8080/api/tutorials/bookings';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  getAllSpots() {
    return this.http.get(spotUrl);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  getSpot(id) {
    return this.http.get(`${spotUrl}/${id}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  createBooking(data) {
    return this.http.post(bookingUrl, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }

  findBookingIDByUserSpot(userID,spotID) {
    return this.http.get(`${bookingUrl}?userID=${userID}&spotID=${spotID}`);
  }

  findSpotIDByBuildingFloorRoomSpot(building,floor,room,spot) {
    return this.http.get(`${spotUrl}?building=${building}&floor=${floor}&room=${room}&spot=${spot}`);
  }

  findByBuildingFloorRoom(building,floor,room) {
    return this.http.get(`${spotUrl}?building=${building}&floor=${floor}&room=${room}`);
  }

  findByBuildingFloor(building,floor) {
    return this.http.get(`${spotUrl}?building=${building}&floor=${floor}`);
  }

  findByBuilding(building) {
    return this.http.get(`${spotUrl}?building=${building}`);
  }

  findBuildings() {
    return this.http.get(`${spotUrl}`);
  }
}
