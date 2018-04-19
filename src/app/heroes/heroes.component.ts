import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //#region  property
  heroes: Hero[];

  selectedHero: Hero;
  //#endregion

  //#region  function, method, event
  ngOnInit() {
    this.getHeroes();
  }

  /**Add a private heroService parameter of type HeroService to the constructor. */
  constructor(private heroService: HeroService) { }

  /**original */
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  /** observable */
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  //#endregion
}
