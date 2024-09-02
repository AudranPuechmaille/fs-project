import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserType } from '../models/user-type.model';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  private baseUrl = 'http://localhost:8080/api/user-types';

  constructor(private http: HttpClient) {}

  getUserTypes(): Observable<UserType[]> {
    return this.http.get<UserType[]>(this.baseUrl);
  }

  getUserTypeById(id: number): Observable<UserType> {
    return this.http.get<UserType>(`${this.baseUrl}/${id}`);
  }

  addUserType(userType: UserType): Observable<UserType> {
    return this.http.post<UserType>(this.baseUrl, userType);
  }

  updateUserType(userType: UserType): Observable<UserType> {
    return this.http.put<UserType>(`${this.baseUrl}/${userType.id}`, userType);
  }

  deleteUserType(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
