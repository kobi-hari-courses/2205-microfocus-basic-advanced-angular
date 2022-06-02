import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { merge, Observable, of, Subject } from 'rxjs';
import { Color } from './models/color.model';
import { ColorsService } from './services/colors.service';
import { debounceTime, map, mapTo, mergeAll, switchAll } from 'rxjs/operators';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  search$ = new Subject<string>();
  results$!: Observable<Color[]>;
  isBusy$!: Observable<boolean>;

  constructor(private colorsService: ColorsService){}

  ngOnInit(): void {
    const res$ = this.search$.pipe(
      debounceTime(500),
      map(keyword => this.colorsService.search(keyword)), 
      switchAll()
    );

    this.results$ = res$;

    const true$ = this.search$.pipe(map(_ => true));
    const false$ = this.results$.pipe(map(_ => false));

    this.isBusy$ = merge(true$, false$);



  }

}
