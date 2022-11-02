import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateSessionDto } from '../models/dto/create-session.dto';
import { CreateSessionResponse } from '../models/interfaces/create-session.interface';
import { RequestTokenResponse } from '../models/interfaces/request-token.interface';
import { SessionResponse } from '../models/interfaces/session-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) { }

  createRequestToken(): Observable<RequestTokenResponse> {
    return this.http.get<RequestTokenResponse>(
      `${environment.apiBaseUrl}/authentication/token/new?api_key=${environment.apiKey}`
    );
  }

  createSession(
    sessionDto: CreateSessionDto
  ): Observable<CreateSessionResponse> {
    return this.http.post<CreateSessionResponse>(
      `${environment.apiBaseUrl}/authentication/session/new?api_key=${environment.apiKey}`,
      sessionDto
    );
  }
  createAccount(session_id: String): Observable<SessionResponse> {
    return this.http.get<SessionResponse>(`${environment.apiBaseUrl}/account?api_key=${environment.apiKey}&session_id=${session_id}`)

  }
  logOut() {
    localStorage.clear();
    history.go(0);
  }
}
