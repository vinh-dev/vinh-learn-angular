import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { debounceTime, distinctUntilChanged, switchMap, distinctUntilKeyChanged } from "rxjs/operators";

import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { SwitchView } from '@angular/common/src/directives/ng_switch';


@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {


  // declare heroes$ as an Observable
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  search(term: string): void {
    this.searchTerms.next(term);
  }

  constructor(private heroService: HeroService) { }
  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term)),

    )
  }

}
