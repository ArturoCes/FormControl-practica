import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PeopleDetailResponse } from '../interfaces/people-detail.interface';
import { People, PeopleResponse } from '../interfaces/people.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(page: number): Observable<PeopleResponse> {

    return this.http.get<PeopleResponse>(`${environment.apiBaseUrl}/person/popular?api_key=${environment.apiKey}&page=${page}`)

  }
  
  getPeopleDetail(people: People):Observable<PeopleDetailResponse>{
    let id = people.id;
    return this.http.get<PeopleDetailResponse>(`${environment.apiBaseUrl}/person/${id}?api_key=${environment.apiKey}`);
  }
}
