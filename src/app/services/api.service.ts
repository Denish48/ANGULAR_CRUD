import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/Restaurent';
  url2 = 'http://localhost:3000/UserData';
  API_CALL() {
    return this.http.get(this.url);
  }
  POST_API_CALL(data: any) {
    return this.http.post(this.url, data);
  }
  DELETE_API_CALL(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
  //to get value of the currnt update data:
  GET_CURR_DATA_API_CALL(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }
  //call api for update the data:
  GET_NEW_UPDATE_DATA(id: any, updatedata: any) {
    return this.http.put(`${this.url}/${id}`, updatedata);
  }
  //user datas api calls:
  POST_USER_DATA_API_CALL(data: any) {
    return this.http.post(this.url2, data);
  }
}
