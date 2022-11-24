import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PeopleDetailResponse } from '../models/interfaces/people-detail.interface';
import { Actor, PeopleResponse } from '../models/interfaces/people-list.interface';

@Injectable({
  providedIn: 'root',
})
export class PeopleListService {
  constructor(private http: HttpClient) {}

  getActors(page: number): Observable<PeopleResponse> {
    return this.http.get<PeopleResponse>(
      `${environment.apiBaseUrl}/person/popular?api_key=${environment.apiKey}&page=${page}`
    );
  }
  getPeopleDetail(people: Actor): Observable<PeopleDetailResponse> {
    let id = people.id;
    return this.http.get<PeopleDetailResponse>(
      `${environment.apiBaseUrl}/person/${id}?api_key=${environment.apiKey}`
    );
  }
}
