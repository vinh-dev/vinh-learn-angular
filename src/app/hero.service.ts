import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';// get class Hero
import { HEROES } from './mock-heroes';// get data in mock-heros

import {MessageService} from './message.service';
@Injectable()
export class HeroService {

  getHeroes(): Observable<Hero[]> {

    // TODO: send the message_after_fetching the heroes
    this.messageService.add("HeroService: fetched heroes is Delare from message.services");
    return of (HEROES);
  }

  constructor(private messageService: MessageService) { }
}
