import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Data2Service } from 'src/app/services/data2.service';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent implements OnInit, OnDestroy {
  notifications: string[] = [];

  subscription!: Subscription;

  constructor(private dataService: Data2Service) { }

  ngOnInit(): void {
    this.subscription = this.dataService.getData().subscribe({
      next: val => this.notifications.push(`next: ${val}`), 
      complete: () => this.notifications.push(`completed`), 
      error: err => this.notifications.push(`error: ${err}`)
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();    
  }

}
