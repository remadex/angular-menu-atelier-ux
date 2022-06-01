import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenusService {
  private url = 'http://localhost:8000/menus';

  constructor(private http: HttpClient) {}

  readAll() {
    return this.http.get(this.url);
  }

  read(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  post(ressource: any) {
    return this.http.post(this.url, ressource);
  }

  update(ressource: any) {
    return this.http.patch(`${this.url}/${ressource.id}`, ressource);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
