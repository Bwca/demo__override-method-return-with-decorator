import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Hero } from 'src/app/models/hero.model';
import { mapStringsToDates } from 'src/app/decorators/map-strings-to-dates.decorator';

@Injectable({
  providedIn: 'root',
})
export class StarWarsApiService {
  private readonly api = 'https://swapi.dev/api';

  constructor(private http: HttpClient) {}

  @mapStringsToDates
  public getHero(id: number): Observable<Hero> {
    const url = `${this.api}/people/${id}`;
    return this.http.get<Hero>(url);
  }
}
