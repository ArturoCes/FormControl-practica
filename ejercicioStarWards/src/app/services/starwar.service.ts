import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsResponse } from '../interface/starwars.interface';

const API_BASE_URL='https://swapi.dev/api';
@Injectable({
  providedIn: 'root'
})
export class StarwarService {
 
  constructor(private http:HttpClient) { }

  public getFilms():Observable<FilmsResponse>{
    return this.http.get(`${API_BASE_URL}/films/`)
  }
}
