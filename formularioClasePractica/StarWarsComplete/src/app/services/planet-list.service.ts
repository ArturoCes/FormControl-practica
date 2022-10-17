import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlanetsResponse } from '../interfaces/planets-list.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetListService {

  constructor(private http:HttpClient) {
  }

  public getPlanets(page: number): Observable<PlanetsResponse>{
    return this.http.get<PlanetsResponse>(`${environment.apiBaseUrl}/planets?page=${page}`);
  }
}
