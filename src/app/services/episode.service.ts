import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { }
  
  public getEpisode(id: string): Observable<any> {
    const pathBase = 'https://rickandmortyapi.com/api/episode'
    return this.http.get(`${pathBase}/${id}`)
  }
}
