import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { PageAComponent } from "./components/page-a/page-a.component";
import { PageBComponent } from "./components/page-b/page-b.component";
import { PageCComponent } from "./components/page-c/page-c.component";

const routes: Routes = [
    { path: '', redirectTo: 'a', pathMatch: 'full'},
    { path: 'a', component: PageAComponent}, 
    { path: 'b', component: PageBComponent}, 
    { path: 'c', component: PageCComponent}, 
    { path: '**', component: NotFoundComponent}
  ];
  
  @NgModule({
      imports: [
          RouterModule.forRoot(routes)
      ], 
      exports: [
          RouterModule
      ]
    
  })
export class AppRoutingModule {}