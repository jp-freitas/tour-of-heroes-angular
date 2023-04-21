import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    const heroes = [
      { id: 1, name: 'Dr. Nice', power: 'Gentleman', alterEgo: '' },
      { id: 2, name: 'Bombasto', power: 'Explosion', alterEgo: '' },
      { id: 3, name: 'Celeritas', power: 'Super Speed', alterEgo: '' },
      { id: 4, name: 'Magneta', power: 'Magnetism', alterEgo: '' },
      { id: 5, name: 'RubberMan', power: 'Super Flexible', alterEgo: '' },
      { id: 6, name: 'Dynama', power: 'Electricty', alterEgo: '' },
      { id: 7, name: 'Dr. IQ', power: 'Really Smart', alterEgo: '' },
      { id: 8, name: 'Magma', power: 'Super Hot', alterEgo: '' },
      { id: 9, name: 'Tornado', power: 'Weather Change', alterEgo: '' }
    ];
    return { heroes };
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 10;
  }
}
