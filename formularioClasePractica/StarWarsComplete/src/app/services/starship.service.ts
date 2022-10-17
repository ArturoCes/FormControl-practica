import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StarshipResponse } from '../interfaces/starship.interface';

@Injectable({
  providedIn: 'root'
})
export class StarshipListService {

  constructor(private http: HttpClient) { }
  getStarship(page: number): Observable<StarshipResponse> {
    return this.http.get<StarshipResponse>(`${environment.apiBaseUrl}/starships?page=${page}`);
  }
}
