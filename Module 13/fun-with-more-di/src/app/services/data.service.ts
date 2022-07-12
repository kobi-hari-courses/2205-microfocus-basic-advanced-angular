import { Inject, Injectable } from '@angular/core';
import { DATA_BASE_URL } from '../injection-tokens';
import { Credentials } from '../models/credentials';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    @Inject(DATA_BASE_URL) private url: string, 
    private cred: Credentials
    ) {

      console.log('url = ', url);
      console.log('credentials = ', cred);
    
    }
}
