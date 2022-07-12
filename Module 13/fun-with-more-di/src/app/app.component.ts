import { APP_INITIALIZER, Component, Inject, Optional } from '@angular/core';
import {
  A_TOKEN,
  CURRENT_DATE,
  CURRENT_DATE_AS_STRING,
  GET_PEOPLE_URL,
  RANDOM_VALUE,
  TOKEN_WITH_NO_INJECTOR,
} from './injection-tokens';
import { Credentials } from './models/credentials';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: A_TOKEN, useValue: 4, multi: true }],
})
export class AppComponent {
  constructor(
    private dataService: DataService,
    private cred: Credentials,
    @Optional() @Inject(TOKEN_WITH_NO_INJECTOR) foo: number | null,

    @Inject(RANDOM_VALUE) randomValue: number,
    @Inject(GET_PEOPLE_URL) getPeopleUrl: string,
    @Inject(CURRENT_DATE_AS_STRING) dateGenerator: () => string, 
    @Inject(APP_INITIALIZER) initializer: any
  ) {
    console.log('initializer = ', initializer);
  }
}
