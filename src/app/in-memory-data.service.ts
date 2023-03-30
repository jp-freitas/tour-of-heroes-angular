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
      { id: 12, name: 'Dr. Nice', power: 'Gentleman', alterEgo: '' },
      { id: 13, name: 'Bombasto', power: 'Explosion', alterEgo: '' },
      { id: 14, name: 'Celeritas', power: 'Super Speed', alterEgo: '' },
      { id: 15, name: 'Magneta', power: 'Magnetism', alterEgo: '' },
      { id: 16, name: 'RubberMan', power: 'Super Flexible', alterEgo: '' },
      { id: 17, name: 'Dynama', power: 'Electricty', alterEgo: '' },
      { id: 18, name: 'Dr. IQ', power: 'Really Smart', alterEgo: '' },
      { id: 19, name: 'Magma', power: 'Super Hot', alterEgo: '' },
      { id: 20, name: 'Tornado', power: 'Weather Change', alterEgo: '' }
    ];
    return { heroes };
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
