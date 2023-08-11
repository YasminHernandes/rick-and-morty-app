import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  pathBase = 'https://rickandmortyapi.com/api/character'

  public getCharacters(page = 1): Observable<any> {
    return this.http.get(`${this.pathBase}?page=${page}`)
  }
  public getCharacter(id: string | null): Observable<any> {
    return this.http.get(`${this.pathBase}/${id}`)
  }
}
