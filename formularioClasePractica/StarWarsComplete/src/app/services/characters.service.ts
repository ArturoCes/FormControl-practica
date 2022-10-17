import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CharactersResponse } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters(page: number): Observable<CharactersResponse>{
    return this.http.get<CharactersResponse>(`${environment.apiBaseUrl}/people?page=${page}`)
  }
}
