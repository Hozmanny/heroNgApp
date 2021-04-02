import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interface/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private db_ep: string = environment.db_endPoint;
  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.db_ep}/heroes`);
  }
  
  getHeroeById(id:string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.db_ep}/heroes/${id}`);
  }

  getSugests(term: string): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.db_ep}/heroes?q=${term}&_limit=6`);
  }
}
