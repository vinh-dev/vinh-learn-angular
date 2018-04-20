import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 11, name: 'Eleven' },
      { id: 12, name: 'Twelve' },
      { id: 13, name: 'Thirteen' },
      { id: 14, name: 'FourTeen' },
      { id: 15, name: 'Fifteen' },
      { id: 16, name: 'Sixteen' },
      { id: 17, name: 'Seventeen' },
      { id: 18, name: 'Eighteen' },
      { id: 19, name: 'Nineteen' },
      { id: 20, name: 'Twenty' }
    ];
    return { heroes };
  }

}
