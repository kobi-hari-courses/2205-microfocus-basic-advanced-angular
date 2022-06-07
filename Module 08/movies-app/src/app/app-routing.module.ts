import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, 
  {path: 'home', component: HomeComponent}, 
  {path: 'movies', component: MoviesListComponent}, 
  {path: 'movies/:movieNumber', component: MovieDetailsComponent},
  {path: 'movies/:movieNumber/edit', component: MovieEditComponent, canActivate: [AuthGuard]},
  {path: 'account', component: AccountComponent}, 
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
