import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ChkDeleteService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/Restaurent';

  API_CHK_VAL_DELETE(d_id: number) {
    return this.http.delete(`${this.url}/${d_id}`);
  }
}
