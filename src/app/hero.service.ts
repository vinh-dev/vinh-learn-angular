import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from "rxjs/operators";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Hero } from './hero';// get class Hero
//import { HEROES } from './mock-heroes';// get data in mock-heros

import { MessageService } from './message.service';
@Injectable()

export class HeroService {

  getHeroes(): Observable<Hero[]> {

    // TODO: send the message_after_fetching the heroes
    //return of(HEROES);//function to return an array of mock heroes as an Observable<Hero[]>.
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  /** Log a HeroService message with the MessageService */
    private log(message: string) {
    this.messageService.add('Throw message: ' + message);
  }

  private heroesUrl = 'api/heroes';// URL to the wweb api

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }





  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
  /**PUT:update the hero on the server */

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(` call function updatehero id = ${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );

  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`call function addehero id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`call function deletehero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }


  /** GET heroes whose name contains search term */

  searchHeroes(term:string):Observable<Hero[]>{
    if (!term.trim()) {
      // if nor search term return empty hero array
      return of([]);
    }

    return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
      tap(_ => this.log(`call function searchHeroes matching${term}`)),
      catchError(this.handleError<Hero[]>('serchHeroes',[]))
    );
  }

}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
